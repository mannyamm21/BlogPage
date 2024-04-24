import { useState, useEffect } from "react";
import appwriteService from "../appwrite/configs";
import { Link } from "react-router-dom";

export default function Postcard({ $id, title, featuredImage, content }) {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    // Create a new DOM parser
    const parser = new DOMParser();
    // Parse the HTML content
    const doc = parser.parseFromString(content, "text/html");
    // Get the text content from the parsed HTML
    const text = doc.body.textContent || "";
    // Set the text content to state
    setTextContent(text);
  }, [content]);

  return (
    <Link
      to={`/post/${$id}`}
      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
    >
      <img
        alt={title}
        src={appwriteService.getFilePreview(featuredImage)}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {textContent}
        </p>

        <Link
          to={`/post/${$id}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </Link>
  );
}
