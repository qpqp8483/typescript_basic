{
  //function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fali";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "login",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fali -> 😥 reason

  function printLoginState(state: LoginState) {
    if (state.result == "success") {
      console.log(`🎉 ${state.response.body} `);
    } else {
      console.log(`😥 ${state.reason}`);
    }
  }
}
