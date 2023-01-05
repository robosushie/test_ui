import React, { useEffect, useState } from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import "../styles/right_section.css";

const code = `-- query customer_contact
SELECT * from TABLE
`;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

const RightSection = () => {
  const [codeValue, setCodeValue] = useState(code);
  return (
    <div className="rs_main_container">
      <div className="rs_scratchpad">
        <Editor
          value={codeValue}
          onValueChange={(code) => setCodeValue(code)}
          highlight={(code) => hightlightWithLineNumbers(code, languages.js)}
          padding={10}
          textareaId="codeArea"
          className="editor"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            outline: 0,
            border: "none",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default RightSection;
