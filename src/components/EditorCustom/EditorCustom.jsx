import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const DefaultValues = {
  TOOLBAR:
    'undo redo bold italic underline forecolor removeformat alignleft aligncenter alignright bullist numlist link unlink blocks template',
  VALUE: '<p>This is the initial content of the editor.</p>',
};

const EditorCustom = ({
  toolbar = DefaultValues.TOOLBAR,
  className,
  placeholder,
  value = DefaultValues.VALUE,
  onChange,
}) => {
  const editorRef = useRef(null);

  const log = () => {
    if (!editorRef.current) return;
    console.log(editorRef.current.getContent());
  };

  // axiom llfxdqrmsq6kub3ki7g9d0p1qcle643r5ridmxpwiy9yium2
  // my 2o3t3twu5j3r5teaeas2csrbozmt08htqxn2eunybsx25iwz

  const dd = `
  <ul>
    <li>111</li>
  </ul>
  `;

  return (
    <div>
      <Editor
        on
        apiKey="2o3t3twu5j3r5teaeas2csrbozmt08htqxn2eunybsx25iwz"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={dd}
        // inline
        // onEditorChange={onChange}
        // value={value}
        init={{
          placeholder,
          block_formats:
            'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6;',
          // icons: 'custom',
          // icons_url: `${process.env.PUBLIC_URL}/icons.js`,
          // fixed_toolbar_container: '#tiny-editor-toolbar',
          toolbar_persist: true,
          menubar: false,
          height: 500,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
            'directionality',
            'template',
          ],
          toolbar: [toolbar],
          // templates: [
          //   {
          //     title: 'Button large',
          //     description: '',
          //     content: getLargeButtonTemplate(),
          //   },
          //   {
          //     title: 'Button small',
          //     description: '',
          //     content: getSmallButtonTemplate(),
          //   },
          // ],
        }}

        // onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the initial content of the editor.</p>"
        // init={{
        //   height: 500,
        //   menubar: false,
        //   plugins: [
        //     'advlist',
        //     'autolink',
        //     'lists',
        //     'link',
        //     'image',
        //     'charmap',
        //     'preview',
        //     'anchor',
        //     'searchreplace',
        //     'visualblocks',
        //     'code',
        //     'fullscreen',
        //     'insertdatetime',
        //     'media',
        //     'table',
        //     'code',
        //     'help',
        //     'wordcount',
        //   ],
        //   toolbar:
        //     'undo redo | blocks | ' +
        //     'bold italic forecolor | alignleft aligncenter ' +
        //     'alignright alignjustify | bullist numlist outdent indent | ' +
        //     'removeformat | help',
        //   content_style:
        //     'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        // }}
      />

      <button type="button" onClick={log}>
        Log editor content
      </button>
    </div>
  );
};

export default EditorCustom;
