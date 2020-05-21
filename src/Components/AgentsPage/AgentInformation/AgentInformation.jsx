import React, { useState, useEffect } from 'react';
import './AgentInformation.scss';
import AgentSkills from 'Components/AgentsPage/AgentSkills/AgentSkills';
export default function AgentInformation(props) {
  const [state, setState] = useState({
    agent: '',
    agentImages: {},
    skillName: '',
    skillDescription: '',
    skillCost: '',
    skillUses: '',
  });
  const { agentName } = props;

  useEffect(() => {
    import(`AgentData/${agentName}.jsx`).then((agent) => {
      setState((prev) => ({ ...prev, agent: agent[agentName] }));
    });

    const skills = ['c', 'q', 'e', 'x'];

    skills.forEach((letter) => {
      import(`Images/Skills/${agentName}-${letter}.svg`).then((agent) => {
        setState((prev) => ({ ...prev, agentImages: { ...prev.agentImages, [letter]: agent.default } }));
      });
    });
  }, [agentName]);

  const setAgentSkill = (skillName, skillDescription, skillCost, skillUses) => {
    setState({
      ...state,
      skillName: skillName,
      skillDescription: skillDescription,
      skillCost: skillCost,
      skillUses: skillUses,
    });
  };
  const skills = ['c', 'q', 'e', 'x'];

  const skillMapper = skills.map((letter) => {
    if (state.agent[letter] !== undefined) {
      console.log(state.agent[letter].name);
      console.log(state.skillName);
      return (
        <div
          className={`skill-inner-container ${state.agent[letter].name === state.skillName && 'selected'}`}
          onClick={() => {
            setAgentSkill(
              state.agent[letter].name,
              state.agent[letter].description,
              state.agent[letter].cost,
              state.agent[letter].uses
            );
          }}>
          <img src={state.agentImages[letter]} alt='' className={`skill-icon`} />
          <div className='skill-descriptions'>
            <div className='skill-item'>{state.agent[letter].name.toUpperCase()}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    state.agent && (
      <div className='agent-wrapper'>
        <div className='agent-container'>
          <div className='agent-info'>
            <h3 className='agent-type'>{state.agent.type.toUpperCase()}</h3>
            <h3 className='agent-name'>{state.agent.name.toUpperCase()}</h3>
          </div>
          <div className='skill-wrapper'>
            <div className='skill-container'>{skillMapper}</div>
          </div>
        </div>
        <div className='description-container'>
          {state.skillDescription && (
            <AgentSkills
              skillName={state.skillName}
              skillDescription={state.skillDescription}
              skillCost={state.skillCost}
              skillUses={state.skillUses}
            />
          )}
        </div>
      </div>
    )
  );
}
