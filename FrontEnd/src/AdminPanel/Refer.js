import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Refer = () => {
  const url = "test";
  const inputRef = React.useRef(null);

  function handleCopy() {
    inputRef.current.select();
    document.execCommand("copy");
  }

  // const [data1, setData] = useState({
  //   customer_id: "",
  //   referrel_id: "",
  //   name: "",
  //   email_id: "",
  //   contact_number: "",
  //   password: "",
  //   account_status: "",
  //   pan_number: "",
  //   qr_code_screenshot: "",
  // });

  let navigate = useNavigate();

  const referrel = async () => {
    try {
      const res = await fetch("/refer", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      await res.json();
      // const data = await res.json();
      // setData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/sign-in");
    }
  };
  useEffect(
    () => {
      referrel();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <div className="col-sm-6 mx-auto">
            <h2 className="mb-4">Refer </h2>
            <label class="form-label">copy code and share</label>
            {/* <input
              value="x7e38dkd95"
              className="form-control border border-info rounded p-4"
              ref={inputRef}
            />

            <button className="btn btn-outline-secondary" onClick={handleCopy}>
              <i className="bi bi-clipboard"></i>
            </button>
            <button className="btn btn-info rounded">Copy</button> */}
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text to copy"
                value={url}
                ref={inputRef}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleCopy}
                >
                  <i className="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
