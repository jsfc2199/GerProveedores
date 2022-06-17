import React, { useState } from "react";
import { providerType } from "../slice/providerSlice";

interface IProviderProps {}

type providerPropsType = {
  props: providerType;
};

const Provider: React.FunctionComponent<providerPropsType> = ({ props }) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.number}</td>
        <td>{props.passport}</td>
      </tr>
    </tbody>
  );
};

export default Provider;
