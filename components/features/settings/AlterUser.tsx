"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconAlertCircle } from "@tabler/icons-react";
import { Modal } from "flowbite-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import MockUser from "@/public/images/settings/avatar_mock.jpg";
import { useSession } from "next-auth/react";
import { UserSetting } from "@/types/user-setting";

type Props = {
  user: UserSetting;
};

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  avatar: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
  nickname: z.string().min(3).max(20).optional(),
  password: z.string().min(6).max(20).optional(),
  newPassword: z.string().min(6).max(20).optional(),
  bio: z.string().min(6).max(100).optional(),
});

const AlterUser: FC<Props> = ({ user }) => {
  const { id, name, email, avatar, bio } = user;

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [openModal, setOpenModal] = useState<string | undefined>();
  const propsModal = { openModal, setOpenModal };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleConfirm = async () => {
    propsModal.setOpenModal(undefined);
    handleSubmit(onSubmit)();
  };

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Modal
        show={propsModal.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => propsModal.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <IconAlertCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Você tem certeza que deseja alterar seus dados?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-md border bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                onClick={() => propsModal.setOpenModal(undefined)}
              >
                Não, cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick={handleConfirm}
              >
                Sim, eu tenho certeza
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Perfil
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Altere seu nome, senha e outras configurações da sua conta.
        </p>
      </div>
      <form>
        {/* Grid */}
        <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
          <div className="sm:col-span-3">
            <label className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200">
              Foto de Perfil
            </label>
          </div>

          <div className="sm:col-span-9">
            <div className="flex items-center gap-5">
              <div className="unset-img relative h-16 w-16">
                <Image
                  className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src={imageUrl || avatar || MockUser}
                  alt="Image Description"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="flex gap-x-2">
                <div>
                  <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border bg-white px-3 py-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <svg
                      className="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                    <span>Upload sua foto</span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedImage(e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-full-name"
              className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
            >
              Nickname
            </label>
            <div className="hs-tooltip inline-block">
              <button type="button" className="hs-tooltip-toggle ml-1">
                <svg
                  className="inline-block h-3 w-3 text-gray-400 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </button>
              <span
                className="hs-tooltip-content invisible absolute z-10 inline-block w-40 rounded-md bg-gray-900 px-2 py-1 text-center text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                role="tooltip"
              >
                Nome público, é o nome que aparecerá para os outros usuários.
              </span>
            </div>
          </div>

          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
                id="af-account-full-name"
                type="text"
                className="relative -ml-px -mt-px block w-full border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm first:rounded-t-lg last:rounded-b-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 sm:mt-0 sm:first:ml-0 sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-r-lg sm:last:rounded-bl-none"
                placeholder="Insira seu nickname"
                {...register("name", { required: true, value: name })}
              />
            </div>
            {errors.nickname && (
              <span className="text-xs text-red-500">
                {String(errors.nickname.message)}
              </span>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-email"
              className="mt-2.5 inline-block text-sm text-gray-400 dark:text-gray-200"
            >
              Email
            </label>
          </div>

          <div className="sm:col-span-9">
            <input
              id="af-account-email"
              type="email"
              className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              placeholder="maria@site.com"
              value={email}
              disabled
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-password"
              className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
            >
              Senha
            </label>
          </div>

          <div className="sm:col-span-9">
            <div className="space-y-2">
              <input
                id="af-account-password"
                type="text"
                className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="Insira sua senha atual"
                {...register("password", { required: true })}
              />
              <input
                type="text"
                className="block w-full rounded-lg border-gray-200 px-3 py-2 pr-11 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="Insira sua nova senha"
                {...register("newPassword", { required: true })}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="af-account-bio"
              className="mt-2.5 inline-block text-sm text-gray-800 dark:text-gray-200"
            >
              BIO
            </label>
          </div>

          <div className="sm:col-span-9">
            <textarea
              id="af-account-bio"
              className="block w-full rounded-lg border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              rows={6}
              placeholder="Digite a sua biografia..."
              {...register("bio", { required: true, value: bio })}
            ></textarea>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-x-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              propsModal.setOpenModal("pop-up");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Salvar mudanças
          </button>
        </div>
      </form>
    </>
  );
};

export default AlterUser;
