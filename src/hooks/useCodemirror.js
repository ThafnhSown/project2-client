import React, { useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import CodeMirror from 'codemirror';

const useCodemirror = (options) => {
  const editorRef = useRef(null);

  React.useEffect(() => {
    editorRef.current = CodeMirror.fromTextArea(editorRef.current, options);
  }, [options]);

  return editorRef;
}

export default useCodemirror;
