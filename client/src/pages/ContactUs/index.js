import React, { useState, useEffect } from "react";
import Form from "../../components/Form";
import LabelledInput, {
  LabelledInputTextType,
  LabelledInputSubmitType,
  LabelledInputEmailType,
} from "../../components/LabelledInput";
import LabelledTextArea, {
  LabelledTextAreaCols,
  LabelledTextAreaRows,
} from "../../components/LabelledTextArea";
import "./ContactUs.css";

function ContactUs() {
  const [data, setData] = useState({
    message: "Fetching from API...",
    fetched: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/").then((res) =>
        res.json()
      );
      setData({
        message: data.data.message,
        fetched: true,
      });
    };

    if (!data.fetched) {
      fetchData();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Us</h1>
        <p>{data.message}</p>

        <Form>
          <LabelledInput
            label={"Name:"}
            name={"name"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"Address line 1:"}
            name={"address_line_1"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"Address line 2:"}
            name={"address_line_2"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"City:"}
            name={"city"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"County:"}
            name={"county"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"Postcode:"}
            name={"postcode"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"Telephone number:"}
            name={"telephone_number"}
            type={LabelledInputTextType}
          />
          <LabelledInput
            label={"Email:"}
            name={"email"}
            type={LabelledInputEmailType}
          />
          <LabelledTextArea
            label={"Message:"}
            name={"message"}
            rows={LabelledTextAreaRows}
            cols={LabelledTextAreaCols}
          />
          <LabelledInput type={LabelledInputSubmitType} />
        </Form>
      </header>
    </div>
  );
}

export default ContactUs;
