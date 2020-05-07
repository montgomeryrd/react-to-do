import React from 'react';
import '../../styles/goals.css';
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

class Goals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goal : '',
      goalList : [],
      goalCount : 0,
      imgs : [centaur, cyclops, dragon, elf, faerie, ghoul, giant, goblin, medusa, monster, orc, troll, viking, werewolf, wizard] 
    }
    this.removeGoal = this.removeGoal.bind(this);
    this.findMonster = this.findMonster.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  removeGoal(goal) {
    this.setState({
      goalList: this.state.goalList.filter((e,i) => i !== goal)
    });
  }
  findMonster(e) {
    return this.state.imgs[Math.floor(Math.random() * Math.floor(e))];
  }
  handleChange(e) {
      this.setState({ goal:e.target.value });
  }
  handleSubmit(e) {
      e.preventDefault();
      let goalList = [...this.state.goalList, [this.findMonster(15), this.state.goal]];
      this.setState({ goalList });
      document.getElementById("goal-input").value="";
  }

  render() {
    return (
        <div className="form-view">
            <form id="goal-input" onSubmit={ this.handleSubmit }>
                <input 
                    id="goal" 
                    type="text" 
                    name="quest" 
                    value={ this.value } 
                    required="true" 
                    autoComplete="off" 
                    onChange={ this.handleChange } 
                    placeholder="What is your GOAL..."/>
                <button id="goal-enter" type="submit" onSubmit={ this.handleSubmit }>submit</button>
            </form>
            <div className="goal-results">
                    { this.state.goalList.length ?
                        <ul>
                            {this.state.goalList.map((goaltodo, i) => <li key={ i }>
                              <div className="goal-creature">
                                <img src={ this.state.goalList[i][0] } alt=""/>
                              </div>
                              <p id="text-in-goal-list">{ this.state.goalList[i][1] }</p>
                              <div className="remove-goal">
                                <img src={ remove } onClick={ this.removeGoal.bind(this, i) } alt=""/>
                              </div>
                            </li>)}
                        </ul>
                        : null
                    }
              </div> 
        </div>
    )
  }
}
export default Goals;