"use client";
import {
  IconPackage,
  IconSettings,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { Tabs } from "flowbite-react";
import React, { FC } from "react";
import AlterUser from "./AlterUser";
import { UserSetting } from "@/types/user-setting";
import DeleteUser from "./DeleteUser";

type Props = {
  user: UserSetting;
};

const TabComponent: FC<Props> = ({ user }) => {
  return (
    <>
      <Tabs.Group aria-label="Default tabs" style="default">
        <Tabs.Item active icon={IconUser} title="Conta">
          <AlterUser user={user} />
        </Tabs.Item>

        <Tabs.Item icon={IconTrash} title="Deletar conta">
          <DeleteUser />
        </Tabs.Item>
      </Tabs.Group>
    </>
  );
};

export default TabComponent;
