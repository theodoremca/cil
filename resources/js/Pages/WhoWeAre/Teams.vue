<template>
    <div class="row">
        <div
            v-for="(member, idx) in teams"
            :key="idx"
            class="col-lg-4 col-sm-6 mb-57"
        >
            <div class="team-item">
                <div class="image-part">
                    <a><img :src="member.photo" alt=""/></a>
                </div>
                <div class="content-part">
                    <h4 class="name">
                        <a>{{ member.name }}</a>
                    </h4>
                    <span class="designation">{{ member.designation }}</span>
                    <ul class="social-links">
                        <li v-if="member.fb">
                            <a :href="member.fb"
                                ><i class="fa fa-facebook"></i
                            ></a>
                        </li>
                        <li v-if="member.gg">
                            <a :href="member.gg"
                                ><i class="fa fa-google-plus"></i
                            ></a>
                        </li>
                        <li v-if="member.tw">
                            <a :href="member.tw"><i class="fa fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Teams",
    data: () => ({
        teams: [
            {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "Adeyinka Adedeji",
                designation: "Front End Dev",
                fb: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                tw: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                gg: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/"
            },
            {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "TOmilayo Beckly",
                designation: "HR",
                fb: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                tw: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                gg: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/"
            },
              {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "TOmilayo Beckly",
                designation: "HR",
                  fb: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                  tw: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                  gg: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/"
            },
              {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "Adeyinka Adedeji",
                designation: "Front End Dev",
                fb: "",
                tw: "",
                gg: ""
            },
                        {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "TOmilayo Beckly",
                designation: "HR",
                fb: "",
                tw: "",
                gg: ""
            },
              {
                photo:
                    "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c",
                name: "TOmilayo Beckly",
                designation: "HR",
                  fb: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                  tw: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/",
                  gg: "https://www.linkedin.com/in/tomilayo-beckley-b2b4b343/"
            },

        ]
    })
};
</script>

<style scoped></style>
