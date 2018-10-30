function result(command) {
    let post = this;
    switch (command) {
        case "upvote":
            post.upvotes += 1;
            break;
        case "downvote":
            post.downvotes += 1;
            break;
        case "score":
            let totalScore = post.upvotes - post.downvotes;
            let rating = "";

            let sixtySixPercentage = (post.upvotes + post.downvotes) * 0.66;
            if (totalScore < 0 && (post.upvotes + post.downvotes) >= 10) {
                rating = 'unpopular';
            } else if (post.upvotes > sixtySixPercentage && (post.upvotes + post.downvotes) >= 10) {
                rating = "hot";
            } else if (totalScore >= 0 && post.upvotes > 100 || post.downvotes > 100) {
                rating = "controversial";
            } else  {
                rating = "new";
            }

            //if total scores is higher than 50
            if ((post.upvotes + post.downvotes) > 50) {
                let maxValue = Math.max.apply(null, [post.upvotes, post.downvotes]);
                let additionalNum = Math.ceil(maxValue * 0.25);

                let upVotes = post.upvotes + additionalNum;
                let downVotes = post.downvotes + additionalNum;

                return [upVotes, downVotes, totalScore, rating];
            }
            return [post.upvotes, post.downvotes, totalScore, rating];
    }
}
