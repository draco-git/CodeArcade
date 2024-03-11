import { baseService } from "./baseService";

export interface LoginQueryParams {
  readonly phoneNumber: string;
  readonly password: string;
}
export const loginService = baseService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<void, LoginQueryParams>({
      query: ({ password, phoneNumber }) => ({
        url: "/login",
        method: "POST",
        body: {
          phoneNumber,
          password,
        },
      }),
    }),
  }),
});

export const useLogin = () => {
  const { useLoginMutation } = loginService;
  const [login, result] = useLoginMutation();
  return {
    login,
    result,
  };
};
