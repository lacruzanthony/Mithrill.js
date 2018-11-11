// \src\components\cards\ConferenceCard.jsx

const m = require('mithril');

import ConferenceField from './ConferenceField.jsx';
import CountDownField from './CountDownField.jsx';

import {updateMockData} from '../../store/data.js';

const favCardHandler = (cardObject) =>
{
    cardObject["favorite"] = true;
    
    updateMockData(cardObject);  
};

const ConferenceCard = {
    data : {
        fav:false
    }, 
    view : (vnode) =>
        <div class="conference-card">
            <div class="conference-fields">
                <ConferenceField fieldValue={`${vnode.attrs.conference.name} @ ${vnode.attrs.conference.location}`}/>
                <a onclick={() => {
                    vnode.state.fav = true;
                    favCardHandler(vnode.attrs.conference)
                }}>
                {
                    vnode.state.fav ? 
                    [
                        <ConferenceField name="fav" fieldValue={
                            <i class="fas fa-star"/>
                        }
                        />
                    ]   
                        : 
                    [
                        <ConferenceField name="fav" fieldValue={
                            <i class="far fa-star"/>
                        }
                        />
                    ]
                }
                </a>
            </div>
            <div class="conference-fields">
                <ConferenceField fieldValue={vnode.attrs.conference.date} />
                <CountDownField fieldValue={vnode.attrs.conference.date} />
            </div>
        </div>
};

export default ConferenceCard;