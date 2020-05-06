import React from 'react';
import '../../styles/tasks.css';
import centaur from '../../icons/creatures/centaur.svg';
import cyclops from '../../icons/creatures/cyclops.svg';
import dragon from '../../icons/creatures/dragon.svg';
import elf from '../../icons/creatures/elf.svg';
import faerie from '../../icons/creatures/faerie.svg';
import ghoul from '../../icons/creatures/ghoul.svg';
import giant from '../../icons/creatures/giant.svg';
import goblin from '../../icons/creatures/goblin.svg';
import medusa from '../../icons/creatures/medusa.svg';
import monster from '../../icons/creatures/monster.svg';
import orc from '../../icons/creatures/orc.svg';
import troll from '../../icons/creatures/troll.svg';
import viking from '../../icons/creatures/viking.svg';
import werewolf from '../../icons/creatures/werewolf.svg';
import wizard from '../../icons/creatures/wizard.svg';
import remove from '../../icons/otherIcons/poisonspider.svg'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task : '',
      list : [],
      taskCount : 0,
      imgs : [centaur, cyclops, dragon, elf, faerie, ghoul, giant, goblin, medusa, monster, orc, troll, viking, werewolf, wizard] 
    }
    this.removeTask = this.removeTask.bind(this);
    // this.archiveTask = this.archiveTask.bind(this);
    this.findMonster = this.findMonster.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  removeTask(task) {
    this.setState({
      list: this.state.list.filter((e,i) => i !== task)
    });
  }
  findMonster(e) {
    return this.state.imgs[Math.floor(Math.random() * Math.floor(e))];
  }
  handleChange(e) {
      this.setState({ task:e.target.value });
  }
  handleSubmit(e) {
      e.preventDefault();
      this.state.list.push([this.findMonster(15), this.state.task]);
      this.setState({task: ''});
      document.getElementById("input").value="";
  }

  render() {
    return (
        <div className="form-view">
            <form id="task-input" onSubmit={ this.handleSubmit }>
                <input 
                    id="input" 
                    type="text" 
                    name="quest" 
                    value={ this.value } 
                    required="true" 
                    autoComplete="off" 
                    onChange={ this.handleChange } 
                    placeholder="What is your quest..."/>
                <button id="enter" type="submit" onSubmit={ this.handleSubmit }>submit</button>
            </form>
            <div className="results">
                    { this.state.list.length ?
                        <ul>
                            {this.state.list.map((todo, i) => <li key={ i }>
                              <div className="creature">
                                <img src={ this.state.list[i][0] } alt=""/>
                              </div>
                              <p>{ this.state.list[i][1] }</p>
                              <div className="remove">
                                <img src={ remove } onClick={ this.removeTask.bind(this, i) } alt=""/>
                              </div>
                            </li>)}
                        </ul>
                        : <p>empty queue</p>
                    }
              </div> 
        </div>
    )
  }
}
export default Tasks;