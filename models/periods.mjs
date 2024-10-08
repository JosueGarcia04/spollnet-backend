import mongoose from 'mongoose';

const PeriodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isSameDay: {
        type: Boolean,
        default: true,
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
    isFinally:{
        type: Boolean,
        default: false
    }
});

export const Period = mongoose.model('Period', PeriodSchema);
