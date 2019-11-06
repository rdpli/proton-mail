import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';

import ItemStar from '../list/ItemStar';
import ItemDate from '../list/ItemDate';
import { ELEMENT_TYPES } from '../../constants';

const MessageHeaderCollapsed = ({ message, onExpand }) => {
    const handleClick = (event) => {
        if (event.target.classList.contains('item-star') || event.target.closest('.item-star')) {
            event.stopPropagation();
            return;
        }

        onExpand();
    };

    return (
        <article
            className="bg-global-light bordered-container pl1 pr1 pt0-5 pb0-5 mb1 flex flex-nowrap flex-items-center flex-spacebetween"
            onClick={handleClick}
        >
            <div>
                <span className="mr0-5">{c('Label').t`From:`}</span>
                <span className="bold mr0-5" title={message.Sender.Name}>
                    {message.Sender.Name}
                </span>
                <i title={message.Sender.Address}>&lt;{message.Sender.Address}&gt;</i>
            </div>
            <div>
                <ItemDate className="mr1" element={message} type={ELEMENT_TYPES.MESSAGE} />
                <ItemStar element={message} type={ELEMENT_TYPES.MESSAGE} />
            </div>
        </article>
    );
};

MessageHeaderCollapsed.propTypes = {
    message: PropTypes.object.isRequired,
    onExpand: PropTypes.func
};

export default MessageHeaderCollapsed;
