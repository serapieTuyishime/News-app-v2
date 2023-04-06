import Link from "next/link";

const CustomLink = ({ text, linkingTo, newPage = true }) => {
    return (
        <Link
            href={linkingTo}
            target={newPage ? "_blank" : "_top"}
            className="font-bold text-gray-500"
        >
            {text}
        </Link>
    );
};

export default CustomLink;
