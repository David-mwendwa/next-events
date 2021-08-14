import React from 'react';
import Link from 'next/link';

import classes from './event-item.module.css'

function EventItem({ event }) {
  const { title, image, date, location, id } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} width="200px" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore Events</Link>
      </div>
    </li>
  );
}

export default EventItem;
