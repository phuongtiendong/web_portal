import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { LoginView } from "sections/login";

// ----------------------------------------------------------------------

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title> {t("title.login")} </title>
      </Helmet>

      <LoginView />
    </>
  );
}
