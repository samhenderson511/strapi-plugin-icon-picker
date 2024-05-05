import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Field,
  FieldError,
  FieldHint,
  FieldInput,
  FieldLabel,
  Flex,
  Icon,
  IconButton,
  Option,
  Searchbar,
  Select,
  Tooltip,
  Typography,
  VisuallyHidden,
  inputFocusStyle,
} from "@strapi/design-system";
import { Trash } from "@strapi/icons";

import { useIntl } from "react-intl";

import * as COMPONENT_ICONS from "@tabler/icons-react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconPickerWrapper = styled(Flex)`
  label {
    ${inputFocusStyle}
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.neutral100};
  }
`;

const IconPick = ({ iconKey, name, onChange, isSelected, ariaLabel }) => {
  return (
    <Field name={name} required={false}>
      <FieldLabel htmlFor={iconKey} id={`${iconKey}-label`}>
        <VisuallyHidden>
          <FieldInput
            type="radio"
            id={iconKey}
            name={name}
            checked={isSelected}
            onChange={onChange}
            value={iconKey}
            aria-checked={isSelected}
            aria-labelledby={`${iconKey}-label`}
          />
          {ariaLabel}
        </VisuallyHidden>
        <Flex padding={2} cursor="pointer" hasRadius background={isSelected && "primary200"}>
          <Icon as={COMPONENT_ICONS[iconKey]} color={isSelected ? "primary600" : "neutral600"} />
        </Flex>
      </FieldLabel>
    </Field>
  );
};

IconPick.propTypes = {
  iconKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

const IconPicker = ({
  intlLabel,
  name,
  onChange,
  value,
  labelAction,
  required,
  error,
  description,
}) => {
  const { formatMessage } = useIntl();
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const allIcons = Object.keys(COMPONENT_ICONS);
  const [iconWeight, setIconWeight] = useState(1.5);
  const weights = [1.25, 1.5, 1.75, 2];
  const [icons, setIcons] = useState(allIcons.slice(0, 500));
  const searchBarRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const onChangeSearch = ({ target: { value } }) => {
    setSearch(value);
    setIcons(() =>
      allIcons.filter((icon) => icon.toLowerCase().includes(value.toLowerCase())).slice(0, 500)
    );
  };

  const onClearSearch = () => {
    toggleSearch();
    setSearch("");
    setIcons(allIcons.slice(0, 500));
  };

  const removeIconSelected = () => {
    onChange({ target: { name, value: "" } });
  };

  useEffect(() => {
    if (showSearch) {
      searchBarRef.current.focus();
    }
  }, [showSearch]);

  return (
    <Field name={name} required={required} id={name} error={error} hint={description}>
      <FieldLabel labelAction={labelAction}>{formatMessage(intlLabel)}</FieldLabel>
      <Flex justifyContent="space-between" paddingBottom={2}>
        <Flex
          style={{
            margin: "10px 0 0",
            alignItems: "flex-end",
            width: "100%",
            justifyContent: "stretch",
          }}
          gap={1}
        >
          <Flex direction="column" gap={1} alignItems="flex-start">
            <FieldLabel htmlFor="iconWeight" id="iconWeight-label">
              {formatMessage({
                id: "icon-picker.weight.label",
                defaultMessage: "Icon weight",
              })}
            </FieldLabel>
            <Select value={iconWeight} onChange={(event) => setIconWeight(parseFloat(event))}>
              {weights.map((weight) => (
                <Option key={weight} value={weight}>
                  {weight} px
                </Option>
              ))}
            </Select>
          </Flex>

          <Searchbar
            style={{ width: "100%" }}
            ref={searchBarRef}
            name="searchbar"
            placeholder={formatMessage({
              id: "icon-picker.search.placeholder",
              defaultMessage: "Search for an icon",
            })}
            onBlur={() => {
              if (!search) {
                toggleSearch();
              }
            }}
            onChange={onChangeSearch}
            value={search}
            onClear={onClearSearch}
            clearLabel={formatMessage({
              id: "icon-picker.search.clear.label",
              defaultMessage: "Clear the icon search",
            })}
          >
            {formatMessage({
              id: "icon-picker.search.placeholder.label",
              defaultMessage: "Search for an icon",
            })}
          </Searchbar>

          {value && (
            <Tooltip
              description={formatMessage({
                id: "icon-picker.remove.tooltip",
                defaultMessage: "Remove the selected icon",
              })}
            >
              <IconButton
                onClick={removeIconSelected}
                aria-label={formatMessage({
                  id: "icon-picker.remove.button",
                  defaultMessage: "Remove the selected icon button",
                })}
                icon={<Trash />}
                style={{ height: "40px", width: "40px" }}
              />
            </Tooltip>
          )}
        </Flex>
      </Flex>
      <IconPickerWrapper
        position="relative"
        padding={1}
        background="neutral100"
        hasRadius
        wrap="wrap"
        gap={2}
        maxHeight="320px"
        overflow="auto"
        textAlign="center"
      >
        {icons.length > 0 ? (
          icons.map((iconKey) => (
            <IconPick
              key={iconKey}
              iconKey={iconKey}
              name={name}
              onChange={onChange}
              isSelected={iconKey === value}
              ariaLabel={formatMessage(
                {
                  id: "icon-picker.icon.label",
                  defaultMessage: "Select {icon} icon",
                },
                { icon: iconKey }
              )}
            />
          ))
        ) : (
          <Box padding={4} grow={2}>
            <Typography textColor="neutral600" textAlign="center">
              {formatMessage({
                id: "icon-picker.emptyState.label",
                defaultMessage: "No icon found",
              })}
            </Typography>
          </Box>
        )}
      </IconPickerWrapper>

      <FieldHint />
      <FieldError />
    </Field>
  );
};

IconPicker.defaultProps = {
  value: "",
};

IconPicker.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default IconPicker;
