import React from "react";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages/index"
import { LOCALES } from "./locales";

const Provider = ({ children, locale  = LOCALES.ENGLISH}) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
        {children}
    </IntlProvider>
  );
};

export default Provider