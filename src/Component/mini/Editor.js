import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
    const editorRef = useRef(null);
    useEffect(() => {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('code'),
                {
                    mode: { name: 'text/x-c++src', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );
    }, []);
    return (
        <div>
            <textarea id="code" name="code"></textarea>
        </div>  
    );
};

export default Editor;