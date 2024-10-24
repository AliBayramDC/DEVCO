import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const BreakevenPage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [variableCost, setVariableCost] = useState<number>(0);
  const [fixedCost, setFixedCost] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>(""); // New state for name
  const [message, setMessage] = useState<string | null>(null); // Alert message
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  ); // Alert type (success or error)

  // Handle the calculation and flip when the button is clicked
  const handleFlip = () => {
    if (sellingPrice && variableCost && fixedCost) {
      if (sellingPrice - variableCost === 0) {
        setResult("Xəta: 0-a bölünmə");
      } else {  
        const calculatedResult = Math.ceil(
          fixedCost / (sellingPrice - variableCost)
        ); // Round up the result
        setResult(calculatedResult.toString());
      }
    }
    setIsFlipped(true);
  };

  const handleBack = () => {
    setIsFlipped(false);
  };

  // Handle the email submission and call the backend
  const handleSendEmail = async () => {
    if (
      !name ||
      !email ||
      !sellingPrice ||
      !variableCost ||
      !fixedCost ||
      !result
    ) {
      setMessage("Zəhmət olmasa, adınızı və email ünvanınızı daxil edin.");
      setMessageType("error");
      return;
    }

    try {
      const response = await axios.post("https://devco-backend.onrender.com/api/send-pdf", {
        sellingPrice,
        variableCost,
        fixedCost,
        result,
        email,
        name, // Make sure the name is sent in the request body
      });

      setMessage(response.data.message);
      setMessageType("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send email");
      setMessageType("error");
    }
  };

  // Close the alert
  const closeAlert = () => {
    setMessage(null);
    setMessageType(null);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Alert Component */}
      {message && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ zIndex: 1000 }} // Ensures the alert overlaps everything
        >
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-xl text-center relative">
            {/* Icon depending on messageType */}
            {messageType === "success" ? (
              <div className="flex justify-center mb-4 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex justify-center mb-4 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M12 4a8 8 0 110 16 8 8 0 010-16z"
                  />
                </svg>
              </div>
            )}

            {/* Message Content */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {messageType === "success"
                ? "İzahlı hesablama emailinizə göndərildi."
                : "failed"}
            </h3>
            <p className="text-gray-600 mb-4">{message}</p>

            {/* Close Button */}
            <button
              className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              onClick={closeAlert}
            >
              Bağla
            </button>
          </div>
        </div>
      )}

      {/* Left Side - Breakeven Information */}
      <div className="md:w-1/2 p-6 space-y-5 text-black">
        <h1 className="text-2xl text-center font-bold text-indigo-900 mb-4 border-b-2 border-gray-300 pb-4">
          Zərərsizlik nöqtəsi (BEP)
        </h1>

        <p className="leading-relaxed text-base text-gray-700 mb-6">
          Zərərsizlik nöqtəsi (BEP) ümumi xərclərin və ümumi gəlirin bərabər
          olduğu nöqtəni təmsil edən maliyyə anlayışıdır. Bu nöqtəyə çatdıqda,
          biznes gəlir əldə etməyə başlayır.
        </p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-indigo-900">
            Sabit Xərclər
          </h2>
          <p className="leading-relaxed text-base text-gray-700">
            Sabit xərclər, istehsal və ya satış səviyyəsi ilə dəyişməyən
            xərclərdir. Bunlara icarə, əmək haqqı və sığorta xərcləri daxildir.
          </p>
        </div>

        <div className="space-y-6 border-t-2 border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-indigo-900">
            Vahid Başına Satış Qiyməti
          </h2>
          <p className="leading-relaxed text-base text-gray-700">
            Bu qiymət hər bir məhsulun və ya xidmətin satıldığı qiymətdir. Satış
            qiymətini düzgün müəyyən etmək, biznesin gəlirliliyi üçün çox
            vacibdir.
          </p>
        </div>

        <div className="space-y-6 border-t-2 border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-indigo-900">
            Vahid Başına Dəyişən Xərc
          </h2>
          <p className="leading-relaxed text-base text-gray-700">
            Dəyişən xərclər istehsal həcmi ilə dəyişən xərcdir. Hər bir əlavə
            məhsul və ya xidmət istehsal edildikcə xərclər artır.
          </p>
        </div>
      </div>

      {/* Right Side - Flip Card */}
      <div className="md:w-1/2 flex justify-center items-center">
        {/* Flip Card Container */}
        <div className="relative w-full max-w-[450px] h-[550px] min-w-[300px] perspective-1000">
          {/* Inner Container to handle 3D flip */}
          <div
            className={`w-full h-full transition-transform duration-1000 ease-in-out transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side (Default View) */}
            <div
              className={`absolute inset-0 bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between ${
                isFlipped ? "hidden" : "block"
              }`}
            >
              <h2 className="text-3xl text-center font-bold text-indigo-900 mb-4">
                Hesablama
              </h2>

              <div className="space-y-6">
                {/* Underlined Input Fields */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Vahid başına satış qiyməti
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-400 outline-none p-2 bg-transparent"
                    type="number"
                    value={sellingPrice || ""} // Prevent undefined by falling back to empty string
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Dəyişən Xərc
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-400 outline-none p-2 bg-transparent"
                    type="number"
                    value={variableCost || ""}
                    onChange={(e) => setVariableCost(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Sabit Xərc
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-400 outline-none p-2 bg-transparent"
                    type="number"
                    value={fixedCost || ""}
                    onChange={(e) => setFixedCost(Number(e.target.value))}
                  />
                </div>
              </div>

              <button
                className="w-full py-2 px-3 bg-indigo-900 hover:bg-indigo-700 text-white font-semibold rounded-lg mt-4 transition duration-300"
                onClick={handleFlip}
              >
                Hesabla
              </button>
            </div>

            {/* Back Side (Email Input View with result) */}
            <div
              className={`absolute inset-0 bg-white shadow-lg rounded-lg p-8 flex flex-col justify-start items-center ${
                isFlipped ? "block" : "hidden"
              } transform rotate-y-180`}
            >
              {/* Icon alone at the top */}
              <FaArrowLeft
                size={24}
                className="text-indigo-900 mb-4 cursor-pointer"
                onClick={handleBack}
              />

              {/* Nəticə and Result grouped together */}
              <div className="text-center mb-4 p-3 rounded-lg">
                <h2 className="text-xl font-bold text-indigo-900">
                  Zərərsizlik nöqtəsi: (Vahid)
                </h2>
                <p className="text-indigo-900 text-lg font-bold mt-2">
                  {result}
                </p>
              </div>

              {/* Name Input */}
              <input
                className="w-full border-b-2 border-gray-400 outline-none p-2 bg-transparent mb-4"
                type="text"
                placeholder="Adınızı daxil edin"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Email Input */}
              <input
                className="w-full border-b-2 border-gray-400 outline-none p-2 bg-transparent mb-4"
                type="email"
                placeholder="Emailinizi daxil edin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="w-full py-2 px-3 bg-indigo-900 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
                onClick={handleSendEmail}
              >
                Göndər
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakevenPage;
