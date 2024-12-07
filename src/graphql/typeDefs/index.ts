import {mergeTypeDefs} from "@graphql-tools/merge";

import {userTypeDefs} from "./userTypeDefs";
import {bookTypeDefs} from "./bookTypeDefs";
import {authTypeDefs} from "./authTypeDefs";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs, bookTypeDefs, authTypeDefs])

export default mergedTypeDefs