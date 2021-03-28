import React from "react";

// 各TodoタスクのIDを定義。Todoを追加するごとにカウントがインクリメントされます。
let idCount = 1;

// React.creeateContexxtでコンテキストを作成
const TodoContext = React.createContext();

// ContextからConsumerを生成してエクスポート
// このConsumerを介して、Providerの子孫コンポーネントでデータを購読
export const TodoConsumer = TodoContext.Consumer;

//このコンポーネントの子孫コンポーネントでTodoConsumerを介してデータ (this.state) を購読
export class TodoContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // todoタスク
      todos: [
        {
          id: idCount,
          title: "1st Todo"
        }
      ],
      text: "",

      addTodo: this.addTodo,
      clearTodo: this.clearTodo,
      // todo追加用ダイアログ内部のテキスト入力の値を更新するメソッド
      updateTitleInput: this.updateTitleInput
    };
  }

  setText = ({ text }) => {
    this.setState({title: text});
  }

  addTodo = ({ title }) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: (idCount += 1), title }
      ]
    });
  };

  // idで指定したtodoをstateの中から削除する。
  clearTodo = id => {
    this.setState({
      todos: [
        {
          id: 1,
          title: "1st Todo"
        }
      ]
    });
  };

  // todo追加用のダイアログ中の入力テキストを更新する。
  updateTitleInput = text => {
    this.setState({
      todoTitleInput: text
    });
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}