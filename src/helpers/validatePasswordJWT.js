import { compare } from 'bcrypt'

export default ({ dbPassword, consumerPassword }) => compare(consumerPassword, dbPassword)
