import LiveElement, { styled, createRef } from "../../dist/LiveElement";

const StyledApp = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "400px",
  height: "400px",
  margin: "auto",
  border: "1px solid black",
  boxShadow: "2px 2px 2px grey"
});

const StyledHeader = styled("header", {
  textAlign: "center",
  height: "18px",
  flexGrow: "0",
  backgroundColor: "lightblue",
});

const StyledBody = styled("div", {
  textAlign: "left",
  flexGrow: "1",
});

const StyledFooter = styled("footer", {
  textAlign: "center",
  height: "18px",
  flexGrow: "0",
  backgroundColor: "lightgreen",
});

const StyledList = styled("div", {
  width: "40%",
  margin: "auto"
});

const StyledListItem = styled("div", {
  border: "1px solid black",
  borderRadius: "3px",
  margin: "5px",
  cursor: "pointer",
  // backgroundColor: "blue"
});

interface TestItemProps extends Partial<HTMLElement>{
  index: number;
  value: string;
  onClick: (index: number) => void;
}

function TestItem(props: TestItemProps) {

  const ref = createRef()

  const handleClick = () =>{
    props.onClick(props.index)
  }

  return (
    <StyledListItem ref={ref} onclick={handleClick}>{props.index}: {props.value}</StyledListItem>
  );
}

interface TestAppProps {
  todoList: string[];
}

class TestApp extends LiveElement {
  props: TestAppProps = { todoList: [] };
  constructor(props: TestAppProps) {
    super();
  }

  listRef = this.createRef();

  moveItemUp = (index: number) => {
    const item = this.props.todoList.splice(index, 1)[0];
    if (index > 0)
      this.props.todoList.splice(index - 1, 0, item);
    else
      this.props?.todoList.push(item);
    this.updateChildren(this.listRef, this.generateList());
  };

  generateList = (): HTMLElement[] => {
    return this.props?.todoList.map((item: string, index: number) => (
      <TestItem index={index} value={item} onClick={this.moveItemUp} />
    ));
  };

  render = () => {
    return (
      <StyledApp>
        <StyledHeader >Test List</StyledHeader>
        <StyledBody>
          <StyledList ref={this.listRef}>
            {this.generateList()}
          </StyledList>
        </StyledBody>
        <StyledFooter>Footer</StyledFooter>
      </StyledApp>
    );
  };
}

const root =
  <TestApp todoList={["One", "Two", "Three"]}>
  </TestApp>;

if (root)
  document.getElementById("root")!.appendChild(root);

