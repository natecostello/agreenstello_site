import PropTypes from 'prop-types'
import React from 'react'
import { Timer } from 'styled-icons/material'
import { Calendar } from 'styled-icons/octicons'
import { Meta, TagList } from './styles'

const PostMeta = ({ title, slug, date, timeToRead, tags = ["dummy"], inTitle = false }) => (
  <Meta inTitle={inTitle}>
    <span>
      <Calendar size="1.2em" />
      &ensp;
      {date}
    </span>
    <span>
      <Timer size="1.2em" />
      &ensp;
      {timeToRead} min read
    </span>
    <TagList tags={tags} />
  </Meta>
)

export default PostMeta

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  inTitle: PropTypes.bool,
}