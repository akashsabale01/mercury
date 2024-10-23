import React, { useRef } from "react";

import { equals } from "ramda";
import { useHistory } from "react-router-dom";
import Select from "react-select";

import { Button, Input } from "components/commons";

const Form = ({
  title,
  setTitle,
  assignedUser,
  users,
  setUserId,
  loading,
  handleSubmit,
  userId,
}) => {
  const history = useHistory();
  const userOptions = users.map(user => ({
    value: user.id,
    label: user.name,
  }));
  const defaultOption = { value: assignedUser?.id, label: assignedUser?.name };

  const initialValues = useRef({
    title,
    userId: assignedUser.id,
  });

  // eslint-disable-next-line no-console
  console.log("oooop ", {
    title,
    userId: assignedUser.id,
    userOptions,
  });

  const isNotDirty = equals(initialValues.current, {
    title,
    userId: assignedUser.id,
  });

  // eslint-disable-next-line no-console
  console.log("assignedUser.id - ", assignedUser.id);

  // eslint-disable-next-line no-console
  console.log("userid - ", userId);

  // eslint-disable-next-line no-console
  console.log("initial v - ", initialValues.current);

  // eslint-disable-next-line no-console
  console.log("final v - ", {
    title,
    userId: assignedUser.id,
  });

  function handleUserChange(e) {
    // eslint-disable-next-line no-console
    console.log("eppp", e);
    // eslint-disable-next-line no-console

    setUserId(e.value);
  }

  return (
    <form className="mb-4 w-full" onSubmit={handleSubmit}>
      <div className="mx-auto mb-4 w-full overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-800 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl">
        <div className="flex flex-col gap-4 p-6">
          <Input
            label="Title"
            placeholder="Todo Title (Max 50 Characters Allowed)"
            value={title}
            onChange={e => setTitle(e.target.value.slice(0, 50))}
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium leading-none text-gray-800">
              Assigned To
            </p>
            <div className="mt-1 w-full">
              <Select
                isSearchable
                defaultValue={defaultOption}
                menuPosition="fixed"
                options={userOptions}
                onChange={e => handleUserChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button
          buttonText="Save changes"
          disabled={userId === assignedUser.id && isNotDirty}
          loading={loading}
          type="submit"
        />
        <Button
          buttonText="Cancel"
          style="secondary"
          onClick={() => history.push("/")}
        />
      </div>
    </form>
  );
};

export default Form;
