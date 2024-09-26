import { useOnce } from "@mongez/react-hooks";
import { getGuestToken } from "app/account/services/auth.service";
import user from "app/account/user";
import { useState, type PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  const [shouldRender, setShouldRender] = useState(user.isLoggedIn());

  useOnce(() => {
    if (user.isLoggedIn()) return;

    getGuestToken().then(() => {
      setShouldRender(true);
    });
  });

  if (!shouldRender) return null;

  return <div className="font-custom">{children}</div>;
}
