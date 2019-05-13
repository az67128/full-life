import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Send";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { addTodo, completeTodo } from "actions/plan";

const PlanList = ({ match, list, addTodo, completeTodo }) => {
  const [text, setText] = React.useState("");
  const changeText = e => {
    setText(e.target.value);
  };
  const submitTodo = () => {
    addTodo({ type: match.params.id, text });
    setText("");
  };
  return (
    <div>
      <div>
        <TextField
          label="Что нужно сделать"
          value={text}
          onChange={changeText}
        />
        <Fab size="small" color="primary" onClick={submitTodo}>
          <AddIcon />
        </Fab>
      </div>
      {list
        .filter(item => !item.complete)
        .map(item => (
          <div key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.complete}
                  onChange={() => completeTodo(item.id)}
                />
              }
              label={item.text}
            />
          </div>
        ))}
      <hr />
      {list
        .filter(item => item.complete)
        .map(item => (
          <div key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.complete}
                  onChange={() => completeTodo(item.id)}
                />
              }
              label={item.text}
            />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = ({ plan }, { match }) => ({
  list: plan.filter(item => item.type === match.params.id)
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  completeTodo: id => dispatch(completeTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanList);
