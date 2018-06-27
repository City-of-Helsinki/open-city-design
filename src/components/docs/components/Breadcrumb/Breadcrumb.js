import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Example = (props) => {
  return (
    <div>

      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#home">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#home">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#library">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Example;
