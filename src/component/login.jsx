import { FingerprintPattern, UserPen } from "lucide-react";

export default function LoginForm({ toggleForm }) {
  return (
    <div className="p-5">
      <div className=" flex justify-center items-center size-12 rounded-2xl mt-10 mb-5 p-1 overflow-hidden mx-auto bg-blue-500">
        <FingerprintPattern className="size-[90%]  text-white" />
      </div>
      <h1 className="text-2xl text-center mb-10">Login</h1>
      <form>
        <div className="input-field">
          <label htmlFor="user-sign" className="text-zinc-500 block mb-2">
            Username
          </label>
          <input
            type="text"
            id="user-sign"
            className="border border-zinc-400 w-full p-2 rounded h-10 outline-0 px-2 mb-3"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="user-sign" className="text-zinc-500 block mb-2">
            password
          </label>
          <input
            type="password"
            id="user-sign"
            className="border border-zinc-400 w-full p-2 rounded h-10 outline-0 px-2 mb-3"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded h-10 mt-5 mb-3.5 w-full "
        >
          Sign in
        </button>
      </form>
      <p className="text-center text-sm font-light">
        Dont have an account? <button onClick={toggleForm}>Sign up</button>
      </p>
    </div>
  );
}
