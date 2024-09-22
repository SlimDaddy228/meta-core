import i18next from "i18next";
import Backend from "i18next-fs-backend";
import {resolve} from "path";

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(Backend).init({
    lng: "ru",
    fallbackLng: "ru",
    ns: ["common", "user"],
    defaultNS: "common",
    backend: {
        loadPath: resolve(GetResourcePath(GetCurrentResourceName()), "apps/cfx/server/i18/locales/{{lng}}/{{ns}}.json"),
    },
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
