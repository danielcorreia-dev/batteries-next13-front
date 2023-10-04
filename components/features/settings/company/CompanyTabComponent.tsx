"use client";
import { Tabs } from "flowbite-react";
import React from "react";
import DeleteCompany from "./DeleteCompany";
import { IconBuildingStore, IconTrash } from "@tabler/icons-react";
import AlterCompany from "./AlterCompany";

type Props = {};

const CompanyTabComponent = (props: Props) => {
  return (
    <>
      <Tabs.Group aria-label="Default tabs" style="default">
        <Tabs.Item active icon={IconBuildingStore} title="Conta">
          <AlterCompany />
        </Tabs.Item>

        <Tabs.Item icon={IconTrash} title="Deletar conta">
          <DeleteCompany />
        </Tabs.Item>
      </Tabs.Group>
    </>
  );
};

export default CompanyTabComponent;
