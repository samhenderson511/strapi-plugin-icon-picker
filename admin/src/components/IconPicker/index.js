import React from "react";
import PropTypes from "prop-types";

import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";
import { Stack } from "@strapi/design-system/Stack";
import {
  Field,
  FieldHint,
  FieldError,
  FieldLabel,
} from "@strapi/design-system/Field";

export default function IconPicker({
  attribute,
  onChange,
  name,
  value,
  disabled,
  labelAction,
  intlLabel,
  required,
  description,
  error,
}) {
  return (
    <Field name={name} id={name} error={error} hint={description}>
      <Stack spacing={1}>
        <FieldLabel labelAction={labelAction} required={required}>
          {intlLabel.defaultMessage}
        </FieldLabel>

        <Box>
          <h1>hey!!</h1>
        </Box>

        <FieldHint />
        <FieldError />
      </Stack>
    </Field>
  );
}
