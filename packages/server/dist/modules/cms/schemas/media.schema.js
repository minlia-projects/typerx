"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.schema = new mongoose_1.Schema({
    name: mongoose_1.SchemaTypes.String,
    size: mongoose_1.SchemaTypes.Number,
    type: mongoose_1.SchemaTypes.String,
    url: mongoose_1.SchemaTypes.String,
    uri: mongoose_1.SchemaTypes.String,
}, { timestamps: true });
//# sourceMappingURL=media.schema.js.map