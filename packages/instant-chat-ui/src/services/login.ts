import { baseService } from "./baseService";

export interface LoginQueryParams {
  readonly phoneNumber: string;
  readonly password: string;
}

export interface LoginResponse {
  response: boolean;
}
export const loginService = baseService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginQueryParams>({
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
    login: (props: LoginQueryParams) => login(props),
    result,
  };
};
