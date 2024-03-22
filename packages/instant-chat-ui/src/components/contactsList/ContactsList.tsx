import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

export interface ContactMsg {
  readonly name: string;
  readonly message: string;
}
export const Contact = ({ data }: { data: ContactMsg }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Avatar />
        </ListItemIcon>
        <ListItemText primary={data.name} secondary={data.message} />
      </ListItemButton>
    </ListItem>
  );
};
const contactArray2: ContactMsg[] = [
  {
    name: "Abc",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
];
const contactArray: ContactMsg[] = [
  {
    name: "Abc",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },

  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Abc",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },

  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Abc",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },

  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
  {
    name: "Xyz",
    message: "hello",
  },
];
export const ContactsList = () => {
  return (
    <List sx={{ background: "#fafafa", overflow: "auto" }}>
      {contactArray.map((data, index) => {
        return (
          <div>
            <Contact data={data} />
            <Divider
              variant={
                index !== contactArray.length - 1 ? "inset" : "fullWidth"
              }
              component="li"
            />
          </div>
        );
      })}
    </List>
  );
};
