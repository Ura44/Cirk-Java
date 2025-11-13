export interface IMessageInterface {
    id:        number;
    content:   string;
    userId:    number;
    username:  string;
    likes:     number;
    reports:   number;
    likedBy:   number[];
    createdAt: Date;
}

export interface IMessageStats {
    totalMessages: number;
    totalUsers:    number;
    totalLikes:    number;
    totalReports:  number;
}
