import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  breadcrumbTextOne,
  breadcrumbTextTwo,
  breadcrumbUrl,
}) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={breadcrumbUrl}>{breadcrumbTextOne}</Link>
              </li>
              <li>{breadcrumbTextTwo}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
