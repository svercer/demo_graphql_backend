import {mergeTypeDefs} from "@graphql-tools/merge";

import {userTypeDefs} from "./userTypeDefs";
import {bookTypeDefs} from "./bookTypeDefs";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs, bookTypeDefs])

export default mergedTypeDefs