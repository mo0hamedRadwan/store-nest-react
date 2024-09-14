import { Button } from "src/apps/front-office/design-system/components/ui/button";

type LoginPageProps = {
  prop?: string;
};

export default function LoginPage(prop: LoginPageProps) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[900px] flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
        {/* Image (hidden on small screens) */}
        <div className="hidden lg:block w-1/2">
          <img
            className="h-full w-full object-contain"
            src="/images/login/login-1.png"
            alt="Woman working on laptop"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-6xl text-mainColor font-semibold mb-4">Login</h1>
          <p className="text-sm text-gray-600 mb-5">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-green-500">
              Create here
            </a>
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-16"
                placeholder="Username or Email *"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-16"
                placeholder="Your password *"
              />
            </div>

            <div className="flex items-center justify-between !mb-[50px]">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-rateColor">
                Forgot password?
              </a>
            </div>
            <Button className="bg-mainColor hover:bg-primary text-white !px-10 !py-[15px]">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
