import { useCurrentLanguage, useSetLanguage } from "@tolgee/react";

export const LangSelector = () => {
  const getLang = useCurrentLanguage();
  const setLang = useSetLanguage();
  return (
    <select
      className="select-css"
      value={getLang()}
      onChange={(e) => setLang(e.target.value)}
    >
      <option value="en">&nbsp;&nbsp;🇬🇧 English</option>
      <option value="es">&nbsp;&nbsp;🇪🇸 Español</option>
    </select>
  );
};