import { useEffect, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';

export default function RTE({
  label = "Content :",
  name = "content",
  control,
  defaultValue = "",
  apiKey
}) {
    const editorRef = useRef(null);

    useEffect(() => {
        // Access the DOM element of the editor
        const editorElement = editorRef.current?.editorContainer;

        // Check if the editor element exists
        if (editorElement) {
            // Set the contenteditable attribute to true to enable editing
            editorElement.contentEditable = true;
        }
    }, []); // This effect runs only once when the component mounts

    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        onEditorChange={onChange}
                        apiKey={apiKey}
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                        ref={editorRef}
                    />
                )}
            />
        </div>
    );
}
