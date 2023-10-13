
document.addEventListener("DOMContentLoaded", function () {
    const tagline = document.getElementById("tagline");
    const tagline2 = document.getElementById("tagline2");
    const getStartedBtn = document.getElementById('get-Started');
    const lackOfEducation = document.getElementById("lack-of-education");
    const aboutIntimaHeading = document.getElementById("About-intima-heading");
    const ourMissionHeading = document.getElementById('our-mission-heading');
    const ourMissionText = document.getElementById('our-mission-text');
    const ourvaluesHeading = document.getElementById("our-values-heading");
    const ourValuesText = document.getElementById('our-values-text');
    const freeForAllHeading = document.getElementById('free-for-all-heading');
    const freeForAllText = document.getElementById('free-for-all-text');
    const ourFutureHeading = document.getElementById("our-future-heading");
    const ourFutureText = document.getElementById('our-future-text');
    const intimaBotHeading = document.getElementById('intima-bot-heading');
    const intimaBotText = document.getElementById('intima-bot-text');
    const intimaChatNow = document.getElementById("chat-now");

    const resourceHeading = document.getElementById("resource-heading");

    const learnMoreBtn = document.querySelectorAll('.learn-more-btn');

    const consentHeading = document.getElementById('consent-heading');
    const consentText = document.getElementById('consent-text');
    const consentModalText = document.getElementById('consent-modal-text');

    const birthControlHeading = document.getElementById('birth-control-heading');
    const birthControlText = document.getElementById('birth-control-text');

    const birthControlModalText = document.getElementById('birth-control-modal-text');

    const STIsHeading = document.getElementById('STIs-heading');
    const STIsText = document.getElementById('STIs-text');
    const STIsModalText = document.getElementById('STIs-modal-text');

    const genderIdentityHeading = document.getElementById('gender-identity');
    const genderIdentityText = document.getElementById('gender-identity-text');
    const genderIdentityModalText = document.getElementById('gender-identity-modal-text');

    const pubertyHeading = document.getElementById('puberty');
    const pubertyText = document.getElementById('puberty-text');
    const pubertyModalText = document.getElementById('puberty-modal-text');

    const sexualDsyfunctionHeading = document.getElementById('sexual-dysfunction');
    const sexualDsyfunctionText = document.getElementById('sexual-dysfunction-text');
    const sexualDsyfunctionModalText = document.getElementById('sexual-dysfunction-modal-text');

    const masturbation = document.getElementById('masturbation');
    const masturbationText = document.getElementById('masturbation-text');
    const masturbationModalText = document.getElementById('masturbation-modal-text');

    const sexualViolence = document.getElementById('sexual-violence');
    const sexualViolenceText = document.getElementById('sexual-violence-text');
    const sexualViolenceModalText = document.getElementById('sexual-violence-modal-text');

    const sexualOrientation = document.getElementById('sexual-orientation');
    const sexualOrientationText = document.getElementById('sexual-orientation-text');
    const sexualOrientationModalText = document.getElementById('sexual-orientaion-modal-text');

    // default language 

    let currentLanguage = "en";

    // Language Data (you can load translations from JSON  or an external file)


    const languages = {
        'en': {
            'tagline': 'Revolutionizing Sex Education in India.',
            'tagline2': 'Redefining the way we approach sexual education',
            'GetStartedBtn': 'Get Started',
            'lackOfEducation': '87% of young people in India lack comprehensive knowledge about reproductive health and contraception',
            'AboutIntimaHeading': 'About Intima',
            'ourMissionHeading': 'Our Mission',
            'ourMissionText': 'Our mission is to provide accurate and reliable information about sexual health',
            'ourValuesHeading': 'Our Values',
            'ourValuesText': 'We are passionate about bringing a change in India.',
            'freeForAllHeading': 'Free for All',
            'freeForAllText': 'We believe Sex Education to be essential. That\'s why we dont charge for using our platform.',
            'ourFutureHeading': 'Our Future',
            'ourFutureText': 'We plan to collaborate with various NGOs and Schools to further our mission of free and accessible sex education.',
            'intimaBotHeading': 'IntimaBot',
            'intimaBotText': 'Introducing IntimaBot, your personal sex education chatbot. With the power of ChatGPT, IntimaBot can provide accurate and reliable information about sex education, relationships, and related topics 24/7. Ask any question you may have without fear of judgment or embarrassment. Start your journey towards a more sexually mature and informed you with IntimaBot',
            'intimaChatNow': 'Chat Now!',
            'resource': 'Resources',
            'learnMoreBtn': 'Learn More',
            'consentHeading': 'Consent',
            'consentText': 'Consent is a fundamental concept in sex education that refers to an agreement between two individuals to engage in a sexual activity. It means that both parties involved have given clear and enthusiastic permission, without being coerced or manipulated, to engage in a sexual activity.',
            'consentModalText':'Sexual consent is a fundamental aspect of sexual health and well-being. It is essential to ensure that all individuals are respected, safe, and in control of their bodies. Consent must always be given freely, without any pressure or coercion. This means that it must not be obtained through physical force, emotional manipulation, or the abuse of power. Consent must also be informed, which means that all parties involved must have a clear understanding of what they are agreeing to. This includes being aware of the risks and consequences of sexual activity, as well as any boundaries or limitations that may exist. It is crucial to communicate openly and honestly about sexual desires, preferences, and expectations to ensure that everyone involved is comfortable and consenting. Consent is ongoing and can be withdrawn at any time, which means that sexual activity must stop immediately if any party involved revokes their consent. Understanding and practicing sexual consent is a critical component of healthy and respectful sexual relationships..',
            'birthControlHeading':'Birth Control',
            'birthControlText':'Birth control is the use of various methods and techniques to prevent pregnancy. It is an essential aspect of sex education as it allows individuals to make informed choices about their reproductive health. Birth control methods range from hormonal contraception to barrier methods like condoms and intrauterine devices (IUDs). ',
           'birthControlModalText':'Birth control is an essential aspect of sex education that allows individuals to make informed decisions about their reproductive health. There are various types of birth control methods available that offer different levels of effectiveness, convenience, and accessibility. Hormonal contraception like the pill and patch, long-acting reversible contraceptives like the IUD, barrier methods like condoms, and fertility awareness methods like tracking ovulation are some of the most commonly used birth control methods. It is crucial to choose a method that works best for you and your partner based on your health, lifestyle, and preferences.',
           "STIsHeading":"Sexually Transmitted Infections (STIs)",
           "STIsText":"Sexually transmitted infections (STIs) are diseases or infections that can be spread through sexual contact, including vaginal, anal, or oral sex. Some STIs can be cured, while others are lifelong conditions that require ongoing medical care.",
           "STIsModalText":"Sexually transmitted infections (STIs) can have serious consequences for individuals and their sexual partners. It is important to use barrier methods such as condoms to reduce the risk of infection, as well as to get tested regularly for STIs. STIs can be asymptomatic, meaning that individuals may not realize that they are infected. If left untreated, STIs can cause infertility, chronic pain, and even death. Many STIs can be cured with antibiotics or other medical treatments, while others require ongoing care and management. Educating individuals about safe sex practices and regular STI testing is essential to prevent the spread of STIs and to promote overall sexual health.",

           'genderIdentityHeading':'Gender Identity',
           'genderIdentityText':'Gender identity refers to an individual\'s internal sense of their gender, which may or may not align with the sex assigned at birth. Gender identity is a deeply personal aspect of identity and can vary widely across individuals.',
           'genderIdentityModalText':'Gender identity is an important aspect of individual identity that deserves respect and understanding. It is not the same as biological sex or sexual orientation, and individuals should be allowed to express their gender identity in the way that feels most authentic to them. Gender identity can be fluid and may change over time, and individuals may identify as non-binary or gender non-conforming. Discrimination against individuals based on their gender identity is unacceptable, and it is essential to create safe and inclusive spaces for individuals of all gender identities.',

           'pubertyHeading':'Puberty',
           'pubertyText':'Puberty is a period of physical and emotional changes that occur during adolescence. It is a time of significant development, including the onset of secondary sex characteristics, changes in hormones, and the beginning of sexual maturity..',
           'pubertyModalText':'Puberty is a time of significant physical, emotional, and social changes as a child’s body matures into an adult body capable of reproduction. It typically occurs between the ages of 8 and 13 for girls, and 9 and 14 for boys, but can vary widely. Puberty involves the development of secondary sex characteristics, such as breast growth, pubic and underarm hair growth, and voice changes in boys. It also includes hormonal changes that lead to the onset of menstruation in girls and the production of sperm in boys. Understanding puberty is important for young people to feel confident and comfortable with their changing bodies.',


           'sexualDsyfunctionHeading':'Sexual Dysfunction',
           'sexualDsyfunctionText':'Sexual dysfunction refers to any problem that prevents individuals from having satisfying sexual experiences. It is a common problem that can affect people of all ages and genders. Understanding sexual dysfunction is crucial for seeking treatment and improving sexual health..',
           'sexualDsyfunctionModalText':'Sexually transmitted infections (STIs) can have serious consequences for individuals and their sexual partners. It is important to use barrier methods such as condoms to reduce the risk of infection, as well as to get tested regularly for STIs. STIs can be asymptomatic, meaning that individuals may not realize that they are infected. If left untreated, STIs can cause infertility, chronic pain, and even death. Many STIs can be cured with antibiotics or other medical treatments, while others require ongoing care and management. Educating individuals about safe sex practices and regular STI testing is essential to prevent the spread of STIs and to promote overall sexual health.',

           'masturbation':'Masturbation',
           'masturbationText':'Masturbation is a normal and healthy sexual activity that is often stigmatized and shrouded in shame and secrecy. Despite its taboo nature, masturbation is a common practice that can have numerous physical and mental health benefits. It is important for individuals to understand the facts about masturbation in order to feel comfortable and confident in their own sexuality.',
           'masturbationModalText':'Masturbation is the act of touching, rubbing, or stimulating one\'s own genitals for sexual pleasure. It is a natural and normal aspect of human sexuality, and nearly all people will engage in it at some point in their lives. Masturbation can have numerous physical and mental health benefits, including reducing stress and anxiety, improving sleep, and increasing self-esteem and body confidence. Masturbation can also be a way for individuals to explore their own bodies and learn about their sexual preferences and desires. It can be a healthy way to satisfy sexual needs without engaging in sexual activity with a partner, and can also enhance sexual experiences with a partner by increasing self-awareness and communication. Despite the many benefits of masturbation, it is often stigmatized and misunderstood. Many people feel ashamed or embarrassed about masturbation, particularly due to cultural or religious beliefs that label it as immoral or sinful. However, it is important for individuals to understand that masturbation is a normal and healthy aspect of human sexuality, and that there is no shame in engaging in it. By promoting open and honest conversations about masturbation, we can help to reduce stigma and support individuals in feeling comfortable and confident in their own sexuality.',

           'sexualViolence':'Sexual Violence',
           'sexualViolenceText':'Sexual violence is a serious problem that affects people of all ages, genders, and sexual orientations. It is an umbrella term that includes any form of unwanted sexual contact, including rape, sexual assault, and sexual harassment. Understanding the impact of sexual violence is crucial for preventing it and supporting survivors.',
           'sexualViolenceModalText':'Sexual violence is a serious problem that affects people of all ages, genders, and sexual orientations. It is an umbrella term that includes any form of unwanted sexual contact, including rape, sexual assault, and sexual harassment. Understanding the impact of sexual violence is crucial for preventing it and supporting survivors.',

           'sexualOrientation':'Sexual Orientations',
           'sexualOrientationText':'Sexual orientation refers to a person\'s emotional, romantic, and sexual attraction to others. It is an important aspect of our identity, and everyone has their unique sexual orientation. Understanding sexual orientation is crucial for creating a safe and accepting environment for people of all sexual orientations.',
           'sexualOrientationModalText':'Sexual orientation is a broad term that encompasses different categories of sexual attraction. The most common sexual orientations are heterosexual, homosexual, and bisexual. Heterosexual individuals are attracted to people of the opposite gender, homosexual individuals are attracted to people of the same gender, and bisexual individuals are attracted to both. Other sexual orientations include pansexual, asexual, and demisexual. It is essential to understand that sexual orientation is not a choice, and people cannot change their sexual orientation. Supporting individuals of all sexual orientations and creating an inclusive environment is crucial for promoting positive sexual health.'

        },
        'hi': {
            'tagline': 'भारत में यौन शिक्षा में क्रांति लाना।',
            'tagline2': 'यौन शिक्षा के प्रति हमारे दृष्टिकोण को पुनः परिभाषित करना',
            'GetStartedBtn': 'शुरू करो',
            'lackOfEducation': 'भारत में 87% युवाओं को प्रजनन स्वास्थ्य और गर्भनिरोधक के बारे में व्यापक जानकारी का अभाव है',
            'AboutIntimaHeading': 'इंटिमा के बारे में',
            'ourMissionHeading': 'हमारा विशेष कार्य',
            'ourMissionText': 'हमारा मिशन यौन स्वास्थ्य के बारे में सटीक और विश्वसनीय जानकारी प्रदान करना है',
            'ourValuesHeading': 'हमारे आदर्श',
            'ourValuesText': 'हम भारत में बदलाव लाने को लेकर उत्साहित हैं।',
            'freeForAllHeading': 'सभी के लिए नि: शुल्क',
            'freeForAllText': 'हमारा मानना ​​है कि यौन शिक्षा आवश्यक है। इसीलिए हम अपने प्लेटफ़ॉर्म का उपयोग करने के लिए कोई शुल्क नहीं लेते हैं।',
            'ourFutureHeading': 'हमारे भविष्य',
            'ourFutureText': 'हम मुफ़्त और सुलभ यौन शिक्षा के अपने मिशन को आगे बढ़ाने के लिए विभिन्न गैर सरकारी संगठनों और स्कूलों के साथ सहयोग करने की योजना बना रहे हैं।',
            'intimaBotHeading': 'इंटिमा',
            'intimaBotText': 'पेश है इंटिमाबॉट, आपका निजी यौन शिक्षा चैटबॉट। ChatGPT की शक्ति के साथ, IntimaBot यौन शिक्षा, रिश्तों और संबंधित विषयों के बारे में 24/7 सटीक और विश्वसनीय जानकारी प्रदान कर सकता है। निर्णय या शर्मिंदगी के डर के बिना अपना कोई भी प्रश्न पूछें। अधिक यौन रूप से परिपक्व होने की दिशा में अपनी यात्रा शुरू करें और आपको IntimaBot से सूचित किया जाएगा।',
            'intimaChatNow': 'अभी बातचीत करें !',
            'resource': 'संसाधन',
            'learnMoreBtn': 'और अधिक जानें',
            'consentHeading': 'सहमति',
            'consentText':'यौन शिक्षा में सहमति एक मौलिक अवधारणा है जो यौन गतिविधि में शामिल होने के लिए दो व्यक्तियों के बीच एक समझौते को संदर्भित करती है। इसका मतलब यह है कि इसमें शामिल दोनों पक्षों ने बिना किसी दबाव या हेरफेर के, यौन गतिविधि में शामिल होने के लिए स्पष्ट और उत्साहपूर्ण अनुमति दी है।',
            'consentModalText':'यौन सहमति यौन स्वास्थ्य और कल्याण का एक बुनियादी पहलू है। यह सुनिश्चित करना आवश्यक है कि सभी व्यक्ति सम्मानित, सुरक्षित और अपने शरीर पर नियंत्रण रखें। सहमति हमेशा बिना किसी दबाव या दबाव के स्वतंत्र रूप से दी जानी चाहिए। इसका मतलब यह है कि इसे शारीरिक बल, भावनात्मक हेरफेर या शक्ति के दुरुपयोग के माध्यम से प्राप्त नहीं किया जाना चाहिए। सहमति के बारे में भी सूचित किया जाना चाहिए, जिसका अर्थ है कि इसमें शामिल सभी पक्षों को इस बात की स्पष्ट समझ होनी चाहिए कि वे किस बात पर सहमत हैं। इसमें यौन गतिविधि के जोखिमों और परिणामों के साथ-साथ मौजूद सीमाओं या सीमाओं के बारे में जागरूक होना शामिल है। यह सुनिश्चित करने के लिए कि इसमें शामिल सभी लोग सहज और सहमतिपूर्ण हैं, यौन इच्छाओं, प्राथमिकताओं और अपेक्षाओं के बारे में खुलकर और ईमानदारी से संवाद करना महत्वपूर्ण है। सहमति जारी है और इसे किसी भी समय वापस लिया जा सकता है, जिसका अर्थ है कि यदि इसमें शामिल कोई भी पक्ष अपनी सहमति रद्द कर देता है तो यौन गतिविधि तुरंत बंद होनी चाहिए। यौन सहमति को समझना और उसका अभ्यास करना स्वस्थ और सम्मानजनक यौन संबंधों का एक महत्वपूर्ण घटक है।',
            'birthControlHeading':'जन्म नियंत्रण',
            'birthControlText':'गर्भधारण को रोकने के लिए विभिन्न तरीकों और तकनीकों का उपयोग जन्म नियंत्रण है। यह यौन शिक्षा का एक अनिवार्य पहलू है क्योंकि यह व्यक्तियों को उनके प्रजनन स्वास्थ्य के बारे में सूचित विकल्प चुनने की अनुमति देता है। जन्म नियंत्रण विधियों में हार्मोनल गर्भनिरोधक से लेकर कंडोम और अंतर्गर्भाशयी उपकरण (आईयूडी) जैसी बाधा विधियां शामिल हैं।',
            'birthControlModalText':'जन्म नियंत्रण यौन शिक्षा का एक अनिवार्य पहलू है जो व्यक्तियों को उनके प्रजनन स्वास्थ्य के बारे में सूचित निर्णय लेने की अनुमति देता है। विभिन्न प्रकार की जन्म नियंत्रण विधियाँ उपलब्ध हैं जो प्रभावशीलता, सुविधा और पहुंच के विभिन्न स्तर प्रदान करती हैं। गोली और पैच जैसे हार्मोनल गर्भनिरोधक, आईयूडी जैसे लंबे समय तक काम करने वाले प्रतिवर्ती गर्भनिरोधक, कंडोम जैसी बाधा विधियां, और ओव्यूलेशन को ट्रैक करने जैसी प्रजनन जागरूकता विधियां सबसे अधिक इस्तेमाल की जाने वाली जन्म नियंत्रण विधियों में से कुछ हैं। ऐसा तरीका चुनना महत्वपूर्ण है जो आपके स्वास्थ्य, जीवनशैली और प्राथमिकताओं के आधार पर आपके और आपके साथी के लिए सबसे अच्छा काम करे।',
            'STIsHeading':'यौन संचारित संक्रमण (एसटीआई)',
            'STIsText':'यौन संचारित संक्रमण (एसटीआई) ऐसे रोग या संक्रमण हैं जो योनि, गुदा या मुख मैथुन सहित यौन संपर्क के माध्यम से फैल सकते हैं। कुछ एसटीआई ठीक हो सकते हैं, जबकि अन्य ऐसी स्थितियां हैं जिनके लिए आजीवन चिकित्सा देखभाल की आवश्यकता होती है।',
            'STIsModalText':'यौन संचारित संक्रमण (एसटीआई) के व्यक्तियों और उनके यौन साझेदारों पर गंभीर परिणाम हो सकते हैं। संक्रमण के जोखिम को कम करने के लिए कंडोम जैसी अवरोधक विधियों का उपयोग करना और साथ ही एसटीआई के लिए नियमित रूप से परीक्षण करवाना महत्वपूर्ण है। एसटीआई स्पर्शोन्मुख हो सकता है, जिसका अर्थ है कि व्यक्तियों को यह एहसास नहीं हो सकता है कि वे संक्रमित हैं। यदि उपचार न किया जाए, तो एसटीआई बांझपन, दीर्घकालिक दर्द और यहां तक ​​कि मृत्यु का कारण बन सकता है। कई एसटीआई को एंटीबायोटिक दवाओं या अन्य चिकित्सा उपचारों से ठीक किया जा सकता है, जबकि अन्य को निरंतर देखभाल और प्रबंधन की आवश्यकता होती है। एसटीआई के प्रसार को रोकने और समग्र यौन स्वास्थ्य को बढ़ावा देने के लिए व्यक्तियों को सुरक्षित यौन प्रथाओं और नियमित एसटीआई परीक्षण के बारे में शिक्षित करना आवश्यक है।',

            'genderIdentityHeading':'लिंग पहचान',
            'genderIdentityText':'लिंग पहचान किसी व्यक्ति की अपने लिंग के बारे में आंतरिक समझ को संदर्भित करती है, जो जन्म के समय निर्दिष्ट लिंग के साथ संरेखित हो भी सकती है और नहीं भी। लिंग पहचान पहचान का एक गहरा व्यक्तिगत पहलू है और अलग-अलग व्यक्तियों में व्यापक रूप से भिन्न हो सकती है।',
            'genderIdentityModalText':'लिंग पहचान व्यक्तिगत पहचान का एक महत्वपूर्ण पहलू है जो सम्मान और समझ का पात्र है। यह जैविक सेक्स या यौन अभिविन्यास के समान नहीं है, और व्यक्तियों को अपनी लिंग पहचान को उस तरीके से व्यक्त करने की अनुमति दी जानी चाहिए जो उन्हें सबसे प्रामाणिक लगे। लिंग पहचान तरल हो सकती है और समय के साथ बदल सकती है, और व्यक्ति गैर-बाइनरी या लिंग गैर-अनुरूपता के रूप में पहचान कर सकते हैं। व्यक्तियों के खिलाफ उनकी लिंग पहचान के आधार पर भेदभाव अस्वीकार्य है, और सभी लिंग पहचान वाले व्यक्तियों के लिए सुरक्षित और समावेशी स्थान बनाना आवश्यक है।',

            'pubertyHeading':'यौवन',
            'pubertyText':'यौवन किशोरावस्था के दौरान होने वाले शारीरिक और भावनात्मक परिवर्तनों की अवधि है। यह महत्वपूर्ण विकास का समय है, जिसमें माध्यमिक यौन विशेषताओं की शुरुआत, हार्मोन में परिवर्तन और यौन परिपक्वता की शुरुआत शामिल है।',
            'pubertyModalText':'यौन हिंसा एक गंभीर समस्या है जो सभी उम्र, लिंग और यौन रुझान के लोगों को प्रभावित करती है। यह एक व्यापक शब्द है जिसमें बलात्कार, यौन उत्पीड़न और यौन उत्पीड़न सहित किसी भी प्रकार का अवांछित यौन संपर्क शामिल है। यौन हिंसा के प्रभाव को समझना इसे रोकने और बचे लोगों का समर्थन करने के लिए महत्वपूर्ण है।',

            'sexualDsyfunctionHeading':'यौन रोग',
            'sexualDsyfunctionText':'यौन रोग किसी भी समस्या को संदर्भित करता है जो व्यक्तियों को संतोषजनक यौन अनुभव प्राप्त करने से रोकता है। यह एक आम समस्या है जो सभी उम्र और लिंग के लोगों को प्रभावित कर सकती है। उपचार प्राप्त करने और यौन स्वास्थ्य में सुधार के लिए यौन रोग को समझना महत्वपूर्ण है।',
            'sexualDsyfunctionModalText':'यौन संचारित संक्रमण (एसटीआई) के व्यक्तियों और उनके यौन साझेदारों पर गंभीर परिणाम हो सकते हैं। संक्रमण के जोखिम को कम करने के लिए कंडोम जैसी अवरोधक विधियों का उपयोग करना और साथ ही एसटीआई के लिए नियमित रूप से परीक्षण करवाना महत्वपूर्ण है। एसटीआई स्पर्शोन्मुख हो सकता है, जिसका अर्थ है कि व्यक्तियों को यह एहसास नहीं हो सकता है कि वे संक्रमित हैं। यदि उपचार न किया जाए, तो एसटीआई बांझपन, दीर्घकालिक दर्द और यहां तक ​​कि मृत्यु का कारण बन सकता है। कई एसटीआई को एंटीबायोटिक दवाओं या अन्य चिकित्सा उपचारों से ठीक किया जा सकता है, जबकि अन्य को निरंतर देखभाल और प्रबंधन की आवश्यकता होती है। एसटीआई के प्रसार को रोकने और समग्र यौन स्वास्थ्य को बढ़ावा देने के लिए व्यक्तियों को सुरक्षित यौन प्रथाओं और नियमित एसटीआई परीक्षण के बारे में शिक्षित करना आवश्यक है।',

             'masturbation':'हस्तमैथुन',
             'masturbationText':'हस्तमैथुन एक सामान्य और स्वस्थ यौन गतिविधि है जिसे अक्सर कलंकित किया जाता है और शर्म और गोपनीयता में छिपा दिया जाता है। अपनी वर्जित प्रकृति के बावजूद, हस्तमैथुन एक आम प्रथा है जिसके कई शारीरिक और मानसिक स्वास्थ्य लाभ हो सकते हैं। व्यक्तियों के लिए अपनी कामुकता में सहज और आत्मविश्वास महसूस करने के लिए हस्तमैथुन के बारे में तथ्यों को समझना महत्वपूर्ण है।',
            'masturbationModalText':'हस्तमैथुन यौन आनंद के लिए अपने स्वयं के जननांगों को छूने, रगड़ने या उत्तेजित करने की क्रिया है। यह मानव कामुकता का एक प्राकृतिक और सामान्य पहलू है, और लगभग सभी लोग अपने जीवन में किसी न किसी बिंदु पर इसमें शामिल होंगे। हस्तमैथुन से कई शारीरिक और मानसिक स्वास्थ्य लाभ हो सकते हैं, जिनमें तनाव और चिंता को कम करना, नींद में सुधार और आत्म-सम्मान और शरीर के आत्मविश्वास को बढ़ाना शामिल है। हस्तमैथुन व्यक्तियों के लिए अपने शरीर का पता लगाने और अपनी यौन प्राथमिकताओं और इच्छाओं के बारे में जानने का एक तरीका भी हो सकता है। यह किसी साथी के साथ यौन गतिविधियों में शामिल हुए बिना यौन जरूरतों को पूरा करने का एक स्वस्थ तरीका हो सकता है, और आत्म-जागरूकता और संचार को बढ़ाकर एक साथी के साथ यौन अनुभवों को भी बढ़ा सकता है। हस्तमैथुन के कई फायदों के बावजूद, इसे अक्सर कलंकित किया जाता है और गलत समझा जाता है। बहुत से लोग हस्तमैथुन को लेकर शर्मिंदगी महसूस करते हैं, खासकर सांस्कृतिक या धार्मिक मान्यताओं के कारण जो इसे अनैतिक या पापपूर्ण मानते हैं। हालाँकि, व्यक्तियों के लिए यह समझना महत्वपूर्ण है कि हस्तमैथुन मानव कामुकता का एक सामान्य और स्वस्थ पहलू है, और इसमें शामिल होने में कोई शर्म की बात नहीं है। हस्तमैथुन के बारे में खुली और ईमानदार बातचीत को बढ़ावा देकर, हम कलंक को कम करने में मदद कर सकते हैं और व्यक्तियों को अपनी कामुकता में सहज और आत्मविश्वास महसूस करने में सहायता कर सकते हैं।',

            'sexualViolence':'यौन हिंसा',
            'sexualViolenceText':'यौन हिंसा एक गंभीर समस्या है जो सभी उम्र, लिंग और यौन रुझान के लोगों को प्रभावित करती है। यह एक व्यापक शब्द है जिसमें बलात्कार, यौन उत्पीड़न और यौन उत्पीड़न सहित किसी भी प्रकार का अवांछित यौन संपर्क शामिल है। यौन हिंसा के प्रभाव को समझना इसे रोकने और बचे लोगों का समर्थन करने के लिए महत्वपूर्ण है।',
            
            'sexualViolenceModalText':'यौन हिंसा एक गंभीर समस्या है जो सभी उम्र, लिंग और यौन रुझान के लोगों को प्रभावित करती है। यह एक व्यापक शब्द है जिसमें बलात्कार, यौन उत्पीड़न और यौन उत्पीड़न सहित किसी भी प्रकार का अवांछित यौन संपर्क शामिल है। यौन हिंसा के प्रभाव को समझना इसे रोकने और बचे लोगों का समर्थन करने के लिए महत्वपूर्ण है।',


            'sexualOrientation':'यौन अभिविन्यास',
            'sexualOrientationText':'यौन रुझान किसी व्यक्ति के दूसरों के प्रति भावनात्मक, रोमांटिक और यौन आकर्षण को दर्शाता है। यह हमारी पहचान का एक महत्वपूर्ण पहलू है, और हर किसी का अपना विशिष्ट यौन रुझान होता है। सभी यौन रुझानों वाले लोगों के लिए एक सुरक्षित और स्वीकार्य वातावरण बनाने के लिए यौन रुझान को समझना महत्वपूर्ण है।',
            'sexualOrientationModalText':'यौन रुझान एक व्यापक शब्द है जो यौन आकर्षण की विभिन्न श्रेणियों को शामिल करता है। सबसे आम यौन रुझान विषमलैंगिक, समलैंगिक और उभयलिंगी हैं। विषमलैंगिक व्यक्ति विपरीत लिंग के लोगों के प्रति आकर्षित होते हैं, समलैंगिक व्यक्ति समान लिंग के लोगों के प्रति आकर्षित होते हैं, और उभयलिंगी व्यक्ति दोनों के प्रति आकर्षित होते हैं। अन्य यौन रुझानों में पैनसेक्सुअल, अलैंगिक और डेमिसेक्सुअल शामिल हैं। यह समझना आवश्यक है कि यौन रुझान कोई विकल्प नहीं है और लोग अपना यौन रुझान नहीं बदल सकते। सकारात्मक यौन स्वास्थ्य को बढ़ावा देने के लिए सभी यौन रुझानों वाले व्यक्तियों का समर्थन करना और एक समावेशी वातावरण बनाना महत्वपूर्ण है।'
            
    }
        // Add more languages transaltion here

    }

    // function to update the content base on language

    function updateContent(language) {
        tagline.textContent = languages[language]['tagline'];
        tagline2.textContent = languages[language]['tagline2'];
        getStartedBtn.textContent = languages[language]['GetStartedBtn'];
        lackOfEducation.textContent = languages[language]['lackOfEducation'];
        aboutIntimaHeading.textContent = languages[language]['AboutIntimaHeading'];

        ourMissionHeading.textContent = languages[language]['ourMissionHeading'];
        ourMissionText.textContent = languages[language]['ourMissionText'];

        ourvaluesHeading.textContent = languages[language]['ourValuesHeading'];
        ourValuesText.textContent = languages[language]['ourValuesText'];

        freeForAllHeading.textContent = languages[language]['freeForAllHeading'];
        freeForAllText.textContent = languages[language]['freeForAllText'];

        ourFutureHeading.textContent = languages[language]["ourFutureHeading"];
        ourFutureText.textContent = languages[language]["ourFutureText"];

        intimaBotHeading.textContent = languages[language]['intimaBotHeading'];
        intimaBotText.textContent = languages[language]['intimaBotText'];
        intimaChatNow.textContent = languages[language]['intimaChatNow'];

        resourceHeading.textContent = languages[language]['resource'];

        learnMoreBtn.forEach((txt) => txt.textContent = languages[language]['learnMoreBtn']);

        consentHeading.textContent = languages[language]['consentHeading'];
        consentText.textContent = languages[language]['consentText'];
        consentModalText.textContent = languages[language]['consentModalText']

        birthControlHeading.textContent = languages[language]['birthControlHeading'];
        birthControlText.textContent = languages[language]['birthControlText'];
        birthControlModalText.textContent = languages[language]['birthControlModalText'];
       
        STIsHeading.textContent = languages[language]['STIsHeading'];
        STIsText.textContent = languages[language]['STIsText'];
        STIsModalText.textContent = languages[language]['STIsModalText'];

        genderIdentityHeading.textContent = languages[language]['genderIdentityHeading'];
        genderIdentityText.textContent = languages[language]['genderIdentityText'];
        genderIdentityModalText.textContent = languages[language]['genderIdentityModalText'];

        pubertyHeading.textContent = languages[language]['pubertyHeading'];
        pubertyText.textContent = languages[language]['pubertyText'];
        pubertyModalText.textContent = languages[language]['pubertyModalText'];

        sexualDsyfunctionHeading.textContent = languages[language]['sexualDsyfunctionHeading'];
        sexualDsyfunctionText.textContent = languages[language]['sexualDsyfunctionText'];
        sexualDsyfunctionModalText.textContent = languages[language]['sexualDsyfunctionModalText'];

        masturbation.textContent = languages[language]['masturbation'];
        masturbationText.textContent = languages[language]['masturbationText'];
        masturbationModalText.textContent = languages[language]['masturbationModalText'];

        sexualViolence.textContent = languages[language]['sexualViolence'];
        sexualViolenceText.textContent = languages[language]['sexualViolenceText'];
        sexualViolenceModalText.textContent = languages[language]['sexualViolenceModalText'];

        sexualOrientation.textContent = languages[language]['sexualOrientation'];
        sexualOrientationText.textContent = languages[language]['sexualOrientationText'];
        sexualOrientationModalText.textContent = languages[language]['sexualOrientationModalText'];

    }

    updateContent(currentLanguage);


    // Language switcher event listener 

    document.getElementById('en').addEventListener("click", function () {
        currentLanguage = "en";
        updateContent(currentLanguage);
    })

    document.getElementById('hi').addEventListener('click', function () {
        currentLanguage = "hi";
        updateContent(currentLanguage)
    })


})

