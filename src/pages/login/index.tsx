import React, { useState } from "react";
import {
  BUTTON_TEXT,
  CARD_HEADER_TEXT,
  CARD_SUB_HEADER_TEXT,
  CHECK_BOX_TEXT,
  INPUT_TEXT,
} from "../../constants";
import { BUTTON_CLASS_NAME, FONT, GRADIENT_BG } from "../../styles";
import { CustomButton, CustomInput } from "../../components";
import LinkButton from "../../components/common/button/linkButton";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-blue-900 py-4 text-white">
      <div className="container mx-auto text-center">
        <span className={`${FONT.headerTextSmall}`}>
          Dealer Or Dealer Staff
        </span>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-blue-900 py-4 text-white">
      <div className="container mx-auto text-center">
        <span className={`${FONT.contentText}`}>
          © 2024 Nikhil Krishna. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isDealer, setIsDealer] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`"w-full px-[2rem] py-9 text-[.9rem] sm:max-w-md sm:rounded-card-radius sm:px-9 sm:shadow-[15px_15px_20px_#ffffff_inset,15px_15px_20px_#cbd5e1]`}
    >
      <div className="flex flex-col items-center">
        <div className={`mb-2 sm:mb-5 ${FONT.cardHeaderTextSmall}`}>
          {CARD_HEADER_TEXT.login}
        </div>
        <div className="mb-4 text-.8-rem text-slate-400">
          {CARD_SUB_HEADER_TEXT.login}
        </div>
      </div>
      <div className="mb-3 sm:mb-6">
        <label
          htmlFor="userId"
          className={`block text-gray-700 ${FONT.contentText}`}
        >
          {INPUT_TEXT.userId}
        </label>
        <CustomInput
          onChange={(e) => setUserId(e.target.value)}
          required
          value={userId}
          type="password"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className={`${FONT.contentText} block text-gray-700`}
        >
          {INPUT_TEXT.password}
        </label>
        <CustomInput
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
        />
      </div>
      <div className="mb-4 sm:mb-8">
        <LinkButton type="button" title={BUTTON_TEXT.forgotPassword} />
      </div>
      <div className="mb-2 sm:mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isDealer}
            onChange={(e) => setIsDealer(e.target.checked)}
            className="form-checkbox"
          />
          <span className={`ml-2 ${FONT.contentText}`}>
            {CHECK_BOX_TEXT.dealerLogin}
          </span>
        </label>
      </div>
      <div className="mb-2 sm:mb-4">
        <div className="flex items-start">
          <div>
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={(e) => setIsAccepted(e.target.checked)}
              className="form-checkbox"
              required
            />
          </div>
          <div className={`ml-2 ${FONT.contentText}`}>
            I accept the{" "}
            <a href="#" className="text-blue-600">
              terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              privacy policy
            </a>
          </div>
        </div>
      </div>
      <CustomButton
        buttonContainerClassName={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} text-white`}
        buttonText={BUTTON_TEXT.login}
      />
    </form>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between bg-app-bg-color">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default App;
