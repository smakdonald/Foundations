var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book (*)",
  "body": "How to Use This Book (*)  Similarly to music and art, mathematics is learned by doing, not just by reading texts and listening to lectures. Doing the exercises in this text is the best way to get a feel for the material, to see what you understand, and to identify what needs further study. Exercises range from routine examples to rather tricky proofs. The exercises have been arranged in order so that in the course of working on an exercise, you may use any previous theorem or exercise (whether or not you did it), but not any subsequent result (unless stated otherwise). Some exercises are used in the text, and are so labeled.  "
},
{
  "id": "sec-statements",
  "level": "1",
  "url": "sec-statements.html",
  "type": "Section",
  "number": "1.1",
  "title": "Statements",
  "body": "Statements  What is a Statement?    Each of our acts makes a statement as to our purpose.   Leo Buscaglia   When we prove theorems in mathematics, we are demonstrating the truth of certain statements. We therefore need to start our discussion of logic with a look at statements, and at how we recognize certain statements as true or false.    A statement is anything we can say, write or otherwise express that is either true or false.     We will be making two assumptions when dealing with statements: every statement is either true or false, and no statement is both true and false. The first of these assumptions, often referred to as the Law of the Excluded Middle (and known formally as bivalence), may seem innocuous enough, but in fact some mathematicians have chosen to work without this powerful axiom.   Statement Examples      The sky is blue is a statement, as it is either true or false.     Your birthday is October 23rd is a statement, as it is either your birtday or it isn't.     The mitochondria is the powerhouse of the cell is a statement.     Do a backflip is not a statement, because it cannot be said to be either true or false.      For something to be a statement, it has to be either true or false in principle; it does not matter whether we personally can verify its truth or falsity.   Combining Statements    Conjunction junction, what's your function?   Schoolhouse Rock   What makes statements valuable for our purposes is that there are a number of useful ways of forming new statements out of old ones. An analog to this would be the ways we have of combining numbers to get new ones, such as addition and multiplication; if we did not have these operations, then numbers would not be very interesting.  In this section we will discuss five ways of forming new statements out of old ones, corresponding to the English expressions: and; or; not; if, then; if and only if.    Let and be statements. The conjunction of and , which is denoted , is the statement that, intuitively, is true if both and are true, and is false otherwise. We read as “ and .” The precise definition of is given by the “truth table”     Let “it is raining today,” and let “it is cold today.” The statement would formally be “it is raining today and it is cold today.”   We could express the same idea more succinctly in English by saying “it is raining and cold today.” In general, we will try to use statements that read well in English, as well as being logically correct.   The colloquial use of the word “and” differs from the mathematical usage stated above. The mathematical usage means the above truth table, and nothing else, while colloquially there are other meanings in addition to this one. One source of confusion involving the word “and” that is well worth avoiding is the colloquial use of this word in the sense of “therefore.”     Let and be statements. The disjunction of and , which is denoted , is the statement that, intuitively, is true if either is true or is true or both are true, and is false otherwise. We read as “ or .” The precise definition of is given by the truth table     The mathematical use of the word “or” always means an inclusive “or,” so that if “ or ” is true, then either is true, or is true, or both and are true.    A simple example of a disjunction is the statement “my car is red or it will rain today.” This statement has the form , where “my car is red,” and “it will rain today.” The truth of this statement implies that at least one of the statements “my car is red” or “it will rain today” is true. The only thing not allowed is that both “my car is red” and “it will rain today” are false.     Let and be statements. The negation of , which is denoted , is the statement that, intuitively, is true if is false, and is false if is true. We read as “not .” The precise definition of is given in the truth table      Let and be statements. The conditional from to , which is denoted , is the statement that, intuitively, is true if it is never the case that is true and is false. We read as if then . The precise definition of P \\to Q is given in the truth table     A simple example of a conditional statement is if it rains today, then I will see a movie this evening. This statement has the form , where “it rains today,” and “I will see a movie this evening.” The truth of this statement does not say that it is raining today, nor that I will see a movie this evening. It only says what will happen if it rains today, which is that I will see a movie this evening. If it does not rain, I still might see a movie this evening, or I might not; both of these possibilities would be consistent with the truth of the original statement “if it rains today, then I will see a movie this evening.”    There are a number of variations as to how to write the statement in English. In addition to writing “if then ,” we could just as well write any of the following:   If , ;     if ;     only if ;     provided that ;    Assuming that , then ;     given that ;     is sufficient for ;     is necessary for .        Let and be statements. The biconditional from to , which is denoted , is the statement that, intuitively, is true if and are both true or both false, and is false otherwise. We read as “ if and only if .” The phrase “if and only if” is often abbreviated as “iff.” The precise definition of is given in the truth table     An example of a biconditional statement is “I will go for a walk if and only if Fred will join me.” This statement has the form , where “I will go for a walk,” and “Fred will join me.” The truth of this statement does not say that I will go for a walk, or that Fred will join me. It says that either Fred will join me and I will go for a walk, or that neither of these things will happen. In other words, it could not be the case that Fred joins me and yet I do not go for a walk, and it also could not be the case that I go for a walk, and yet Fred has not joined me.    There are some variations as to how to write the statement in English. In addition to writing “ if and only if ,” it is common to write “ is necessary and sufficient for .”   Rather than memorizing the truth tables, for many people it is easier to remember the rules summarized in   Logical Operators    Operator  Symbolic Form  Truth Values    Conjunction   True only when both and are true.    Disjunction   False only when both and are false.    Negation   Opposite truth value of    Conditional   False only when is true and is false.    Biconditional   True when either both and are true or when and are false      Tautologies and Contradictions    Do I contradict myself? Very well, then, I contradict myself; I am large - I contain multitudes.   Walt Whitman     A tautology is a statement that is always true by logical necessity, regardless of whether the component statements are true or false, and regardless of what we happen to observe in the real world.     An example of a tautology is the statement “Irene has red hair or she does not have red hair.” It seems intuitively clear that this statement is a tautology, and we can verify this fact formally by using truth tables. Let “Irene has red hair.” Then our purported tautology is the statement . The truth table for this statement is We see in column that the statement is always true, regardless of whether is true or false. This fact tells us that is a tautology. In general, a statement is a tautology if, as verified using a truth table, it is always true, regardless of whether its component statements are true or false.     A contradiction is a statement that is always false by logical necessity.     The statement “Irene has red hair and she does not have red hair” is a contradiction. In symbols this statement is , and it has truth table The statement is always false, regardless of whether is true or false. In general, a statement is a contradiction if, as verified using a truth table, it is always false, regardless of whether its component statements are true or false.    "
},
{
  "id": "def-statement",
  "level": "2",
  "url": "sec-statements.html#def-statement",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A statement is anything we can say, write or otherwise express that is either true or false.   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-statements.html#remark-1",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": " We will be making two assumptions when dealing with statements: every statement is either true or false, and no statement is both true and false. The first of these assumptions, often referred to as the Law of the Excluded Middle (and known formally as bivalence), may seem innocuous enough, but in fact some mathematicians have chosen to work without this powerful axiom.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-statements.html#example-1",
  "type": "Example",
  "number": "1.3",
  "title": "Statement Examples.",
  "body": "Statement Examples      The sky is blue is a statement, as it is either true or false.     Your birthday is October 23rd is a statement, as it is either your birtday or it isn't.     The mitochondria is the powerhouse of the cell is a statement.     Do a backflip is not a statement, because it cannot be said to be either true or false.     "
},
{
  "id": "def-conjunction",
  "level": "2",
  "url": "sec-statements.html#def-conjunction",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  Let and be statements. The conjunction of and , which is denoted , is the statement that, intuitively, is true if both and are true, and is false otherwise. We read as “ and .” The precise definition of is given by the “truth table”   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-statements.html#example-2",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": " Let “it is raining today,” and let “it is cold today.” The statement would formally be “it is raining today and it is cold today.”  "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-statements.html#warning-1",
  "type": "Warning",
  "number": "1.6",
  "title": "",
  "body": " The colloquial use of the word “and” differs from the mathematical usage stated above. The mathematical usage means the above truth table, and nothing else, while colloquially there are other meanings in addition to this one. One source of confusion involving the word “and” that is well worth avoiding is the colloquial use of this word in the sense of “therefore.”  "
},
{
  "id": "def-disjunction",
  "level": "2",
  "url": "sec-statements.html#def-disjunction",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": "  Let and be statements. The disjunction of and , which is denoted , is the statement that, intuitively, is true if either is true or is true or both are true, and is false otherwise. We read as “ or .” The precise definition of is given by the truth table   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-statements.html#remark-2",
  "type": "Remark",
  "number": "1.8",
  "title": "",
  "body": " The mathematical use of the word “or” always means an inclusive “or,” so that if “ or ” is true, then either is true, or is true, or both and are true.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-statements.html#example-3",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": " A simple example of a disjunction is the statement “my car is red or it will rain today.” This statement has the form , where “my car is red,” and “it will rain today.” The truth of this statement implies that at least one of the statements “my car is red” or “it will rain today” is true. The only thing not allowed is that both “my car is red” and “it will rain today” are false.  "
},
{
  "id": "def-negation",
  "level": "2",
  "url": "sec-statements.html#def-negation",
  "type": "Definition",
  "number": "1.10",
  "title": "",
  "body": "  Let and be statements. The negation of , which is denoted , is the statement that, intuitively, is true if is false, and is false if is true. We read as “not .” The precise definition of is given in the truth table   "
},
{
  "id": "def-conditional",
  "level": "2",
  "url": "sec-statements.html#def-conditional",
  "type": "Definition",
  "number": "1.11",
  "title": "",
  "body": "  Let and be statements. The conditional from to , which is denoted , is the statement that, intuitively, is true if it is never the case that is true and is false. We read as if then . The precise definition of P \\to Q is given in the truth table   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-statements.html#example-4",
  "type": "Example",
  "number": "1.12",
  "title": "",
  "body": " A simple example of a conditional statement is if it rains today, then I will see a movie this evening. This statement has the form , where “it rains today,” and “I will see a movie this evening.” The truth of this statement does not say that it is raining today, nor that I will see a movie this evening. It only says what will happen if it rains today, which is that I will see a movie this evening. If it does not rain, I still might see a movie this evening, or I might not; both of these possibilities would be consistent with the truth of the original statement “if it rains today, then I will see a movie this evening.”  "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-statements.html#convention-1",
  "type": "Convention",
  "number": "1.13",
  "title": "",
  "body": " There are a number of variations as to how to write the statement in English. In addition to writing “if then ,” we could just as well write any of the following:   If , ;     if ;     only if ;     provided that ;    Assuming that , then ;     given that ;     is sufficient for ;     is necessary for .     "
},
{
  "id": "def-biconditional",
  "level": "2",
  "url": "sec-statements.html#def-biconditional",
  "type": "Definition",
  "number": "1.14",
  "title": "",
  "body": "  Let and be statements. The biconditional from to , which is denoted , is the statement that, intuitively, is true if and are both true or both false, and is false otherwise. We read as “ if and only if .” The phrase “if and only if” is often abbreviated as “iff.” The precise definition of is given in the truth table   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec-statements.html#example-5",
  "type": "Example",
  "number": "1.15",
  "title": "",
  "body": " An example of a biconditional statement is “I will go for a walk if and only if Fred will join me.” This statement has the form , where “I will go for a walk,” and “Fred will join me.” The truth of this statement does not say that I will go for a walk, or that Fred will join me. It says that either Fred will join me and I will go for a walk, or that neither of these things will happen. In other words, it could not be the case that Fred joins me and yet I do not go for a walk, and it also could not be the case that I go for a walk, and yet Fred has not joined me.  "
},
{
  "id": "convention-2",
  "level": "2",
  "url": "sec-statements.html#convention-2",
  "type": "Convention",
  "number": "1.16",
  "title": "",
  "body": " There are some variations as to how to write the statement in English. In addition to writing “ if and only if ,” it is common to write “ is necessary and sufficient for .”  "
},
{
  "id": "table-operators",
  "level": "2",
  "url": "sec-statements.html#table-operators",
  "type": "Table",
  "number": "1.17",
  "title": "Logical Operators",
  "body": "Logical Operators    Operator  Symbolic Form  Truth Values    Conjunction   True only when both and are true.    Disjunction   False only when both and are false.    Negation   Opposite truth value of    Conditional   False only when is true and is false.    Biconditional   True when either both and are true or when and are false    "
},
{
  "id": "def-tautology",
  "level": "2",
  "url": "sec-statements.html#def-tautology",
  "type": "Definition",
  "number": "1.18",
  "title": "",
  "body": "  A tautology is a statement that is always true by logical necessity, regardless of whether the component statements are true or false, and regardless of what we happen to observe in the real world.   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-statements.html#example-6",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": " An example of a tautology is the statement “Irene has red hair or she does not have red hair.” It seems intuitively clear that this statement is a tautology, and we can verify this fact formally by using truth tables. Let “Irene has red hair.” Then our purported tautology is the statement . The truth table for this statement is We see in column that the statement is always true, regardless of whether is true or false. This fact tells us that is a tautology. In general, a statement is a tautology if, as verified using a truth table, it is always true, regardless of whether its component statements are true or false.  "
},
{
  "id": "def-contradiction",
  "level": "2",
  "url": "sec-statements.html#def-contradiction",
  "type": "Definition",
  "number": "1.20",
  "title": "",
  "body": "  A contradiction is a statement that is always false by logical necessity.   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-statements.html#example-7",
  "type": "Example",
  "number": "1.21",
  "title": "",
  "body": " The statement “Irene has red hair and she does not have red hair” is a contradiction. In symbols this statement is , and it has truth table The statement is always false, regardless of whether is true or false. In general, a statement is a contradiction if, as verified using a truth table, it is always false, regardless of whether its component statements are true or false.  "
},
{
  "id": "sec-statement-relations",
  "level": "1",
  "url": "sec-statement-relations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Relations Between Statements",
  "body": "Relations Between Statements   Up until now we have constructed statements; now we want to discuss relations between them. Relations between statements are not formal statements in themselves, but are “meta-statements” that we make about statements. The two types of such relations we will study, namely, implication and equivalence, are the meta-statement analogs of conditionals and biconditionals.   Implications    Implication is thus the very texture of our web of belief, and logic is the theory that traces it.   Willard Van Orman Quine     Let and be statements. We say that  implies  if the statement is a tautology.     We abbreviate the English expression “ implies ” with the notation “ .”   The intuitive idea of logical implication is that statement implies statement if necessarily is true whenever is true. In other words, it can never be the case that is true and is false. Necessity is the key here, because one statement implying another should not simply be a matter of coincidentally appropriate truth values.   It is important to note the difference between the notations “ ” and “ .” The notation “ ” is a statement; it is a compound statement built up out of the statements and . The notation “ ” is a meta-statement, which is simply a shorthand way of writing the English expression “ implies ,” and it means that is not just true in some particular instances, but is a tautology.   It might appear at first glance as if we are not introducing anything new here, given that we are defining implication in terms of conditional statements, but there is a significant new idea in the present discussion, which is that we single out those situations where is not just a statement (which is always the case), but where is a tautology.  In particular, the following implications will be used extensively.  Important Implications  Let and be statements.  Modus Ponens      Modus Tollens      Simplification      Simplification      Addition      Addition      Modus Tollendo Ponens      Modus Tollendo Ponens      Biconditional-Conditional      Biconditional-Conditional      Conditional-Biconditional      Hypothetical Syllogism      Constructive Dilemma         The implications stated in were chosen because they are symbolic statements of various rules of valid argumentation.   Equivalent Statements    Too much may be the equivalent of none at all.   Lee Loevinger   Logical implication is not always reversible.   Written in symbols, we saw that . On the other hand, the same truth tables used to establish this implication also show that does not imply . For example, when P and Q are both true, then is true, but is false. Alternatively, it can be seen by a truth table that is not a tautology.   Some logical implications, however, are reversible. Such implications are very convenient, and they convey the idea of logical equivalence, to which we now turn.    Let and be statements. We say that and are equivalent if the statement is a tautology. We abbreviate the English expression “ and are equivalent” with the notation “ .”    The intuitive idea of equivalence of statements is that to claim that statements and are equivalent means that necessarily is true if and only if is true. Necessity is once again the key here.  Such equivalences will allow us to find alternative forms of the statements of some theorems, and these alternative forms are sometimes easier to prove than the originals.   Certainly, two different English sentences can convey equivalent statements, for example “if it rains I will stay home” and “I will stay home if it rains.” These two statements are both English variants of , where “it rains,” and “I will stay home.” The difference between these two statements is an issue only of the flexibility of the English language; symbolically, these two statements are identical, not just equivalent.    It is important to note the difference between the notations “ ” and “ .” The latter is a statement, whereas the former is a meta-statement, which is simply a shorthand way of writing the English expression “ is equivalent to .”   Double Negation    .      might appear innocuous, but this equivalence plays a very important role in standard mathematical proofs. In informal terms, the equivalence of and means that “two negatives cancel each other out.”   Important Equivalent Statements  Let , and be statements.  Commutative Law   .   Commutative Law   .   Associative Law   .   Associative Law   .   Distributive Law   .   Distributive Law   .     .   Contrapositive   .     .     .   De Morgan’s Law   .   De Morgan’s Law   .     .     .       Contrapositive, Converse, Inverse    Logic is the hygiene the mathematician practices to keep his ideas healthy and strong.   Hermann Weyl     Given a conditional statement of the form , we call the contrapositive of the original statement.     gives a reformulation of the biconditional in terms of conditionals.   For example, the contrapositive of “if I eat too much I will feel sick” is “if I do not feel sick I did not eat too much.”   We also give names to two other variants of statements of the form .    For a statement , we call the converse of the original statement.      For a statement , we call the inverse of the original statement.     Continuing the example of the previous paragraph, the converse of “if I eat too much I will feel sick” is “if I feel sick then I ate too much”; the inverse of the original statement is “if I did not eat too much then I will not feel sick.”    It is important to recognize that neither the converse nor the inverse is equivalent to the original statement, as the reader can verify by constructing the appropriate truth tables.    Although the converse and inverse of a statement are not equivalent to the original statement, we note that, however, that the converse and the inverse are equivalent to each another, as can be seen by applying Fact 1.3.2 (9) to the statement .    Let and be statements. Show that the following are true.    .     .     .     .     .     .     .     .       "
},
{
  "id": "def-implication",
  "level": "2",
  "url": "sec-statement-relations.html#def-implication",
  "type": "Definition",
  "number": "1.22",
  "title": "",
  "body": "  Let and be statements. We say that  implies  if the statement is a tautology.   "
},
{
  "id": "convention-3",
  "level": "2",
  "url": "sec-statement-relations.html#convention-3",
  "type": "Convention",
  "number": "1.23",
  "title": "",
  "body": " We abbreviate the English expression “ implies ” with the notation “ .”  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-statement-relations.html#remark-3",
  "type": "Remark",
  "number": "1.24",
  "title": "",
  "body": " It is important to note the difference between the notations “ ” and “ .” The notation “ ” is a statement; it is a compound statement built up out of the statements and . The notation “ ” is a meta-statement, which is simply a shorthand way of writing the English expression “ implies ,” and it means that is not just true in some particular instances, but is a tautology.  "
},
{
  "id": "ex-implications",
  "level": "2",
  "url": "sec-statement-relations.html#ex-implications",
  "type": "Example",
  "number": "1.25",
  "title": "Important Implications.",
  "body": "Important Implications  Let and be statements.  Modus Ponens      Modus Tollens      Simplification      Simplification      Addition      Addition      Modus Tollendo Ponens      Modus Tollendo Ponens      Biconditional-Conditional      Biconditional-Conditional      Conditional-Biconditional      Hypothetical Syllogism      Constructive Dilemma        "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-statement-relations.html#example-9",
  "type": "Example",
  "number": "1.26",
  "title": "",
  "body": " Written in symbols, we saw that . On the other hand, the same truth tables used to establish this implication also show that does not imply . For example, when P and Q are both true, then is true, but is false. Alternatively, it can be seen by a truth table that is not a tautology.  "
},
{
  "id": "def-equivalent-statements",
  "level": "2",
  "url": "sec-statement-relations.html#def-equivalent-statements",
  "type": "Definition",
  "number": "1.27",
  "title": "",
  "body": "  Let and be statements. We say that and are equivalent if the statement is a tautology. We abbreviate the English expression “ and are equivalent” with the notation “ .”   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-statement-relations.html#remark-4",
  "type": "Remark",
  "number": "1.28",
  "title": "",
  "body": " Certainly, two different English sentences can convey equivalent statements, for example “if it rains I will stay home” and “I will stay home if it rains.” These two statements are both English variants of , where “it rains,” and “I will stay home.” The difference between these two statements is an issue only of the flexibility of the English language; symbolically, these two statements are identical, not just equivalent.  "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "sec-statement-relations.html#warning-2",
  "type": "Warning",
  "number": "1.29",
  "title": "",
  "body": " It is important to note the difference between the notations “ ” and “ .” The latter is a statement, whereas the former is a meta-statement, which is simply a shorthand way of writing the English expression “ is equivalent to .”  "
},
{
  "id": "ident-double-negation",
  "level": "2",
  "url": "sec-statement-relations.html#ident-double-negation",
  "type": "Example",
  "number": "1.30",
  "title": "Double Negation.",
  "body": "Double Negation    .   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-statement-relations.html#remark-5",
  "type": "Remark",
  "number": "1.31",
  "title": "",
  "body": "  might appear innocuous, but this equivalence plays a very important role in standard mathematical proofs. In informal terms, the equivalence of and means that “two negatives cancel each other out.”  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-statement-relations.html#example-11",
  "type": "Example",
  "number": "1.32",
  "title": "Important Equivalent Statements.",
  "body": "Important Equivalent Statements  Let , and be statements.  Commutative Law   .   Commutative Law   .   Associative Law   .   Associative Law   .   Distributive Law   .   Distributive Law   .     .   Contrapositive   .     .     .   De Morgan’s Law   .   De Morgan’s Law   .     .     .     "
},
{
  "id": "def-contrapositive",
  "level": "2",
  "url": "sec-statement-relations.html#def-contrapositive",
  "type": "Definition",
  "number": "1.33",
  "title": "",
  "body": "  Given a conditional statement of the form , we call the contrapositive of the original statement.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-statement-relations.html#example-12",
  "type": "Example",
  "number": "1.34",
  "title": "",
  "body": " For example, the contrapositive of “if I eat too much I will feel sick” is “if I do not feel sick I did not eat too much.”  "
},
{
  "id": "def-converse-statement",
  "level": "2",
  "url": "sec-statement-relations.html#def-converse-statement",
  "type": "Definition",
  "number": "1.35",
  "title": "",
  "body": "  For a statement , we call the converse of the original statement.   "
},
{
  "id": "def-inverse-statement",
  "level": "2",
  "url": "sec-statement-relations.html#def-inverse-statement",
  "type": "Definition",
  "number": "1.36",
  "title": "",
  "body": "  For a statement , we call the inverse of the original statement.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-statement-relations.html#example-13",
  "type": "Example",
  "number": "1.37",
  "title": "",
  "body": " Continuing the example of the previous paragraph, the converse of “if I eat too much I will feel sick” is “if I feel sick then I ate too much”; the inverse of the original statement is “if I did not eat too much then I will not feel sick.”  "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "sec-statement-relations.html#warning-3",
  "type": "Warning",
  "number": "1.38",
  "title": "",
  "body": " It is important to recognize that neither the converse nor the inverse is equivalent to the original statement, as the reader can verify by constructing the appropriate truth tables.  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-statement-relations.html#remark-6",
  "type": "Remark",
  "number": "1.39",
  "title": "",
  "body": " Although the converse and inverse of a statement are not equivalent to the original statement, we note that, however, that the converse and the inverse are equivalent to each another, as can be seen by applying Fact 1.3.2 (9) to the statement .  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-statement-relations.html#exercise-1",
  "type": "Exploration",
  "number": "1.40",
  "title": "",
  "body": " Let and be statements. Show that the following are true.    .     .     .     .     .     .     .     .     "
},
{
  "id": "sec-valid-arguments",
  "level": "1",
  "url": "sec-valid-arguments.html",
  "type": "Section",
  "number": "1.3",
  "title": "Valid Arguments",
  "body": "Valid Arguments   In the previous sections of this chapter we looked at statements from the point of view of truth and falsity. We verified the truth or falsity of statements via truth tables, which allowed us to consider all possible ways in which various component statements might be true or false. This approach, while the most basic way to treat the truth or falsity of statements, does not appear to resemble the way mathematicians prove theorems, which is by starting with the hypotheses, and then writing one new statement at a time, each of which is implied by the previous statements, until the conclusion is reached. In this section we look at the analogous construction in logic, that is, the rules of logical argumentation, and we will see the relation of this approach to what was discussed in the previous sections of this chapter.   Logical Arguments    A logical argument is a collection of statements, the last of which is the conclusion of the argument, and the rest of which are the premises of the argument.     The use of the word “argument” in logic is different from the colloquial use of the word, where it could mean the reasons given for thinking that something is true, or it could mean a heated (and not necessarily logical) discussion.    Consider the following collection of statements, which has a number of premises together with a conclusion.  If the poodle-o-matic is cheap or is energy efficient, then it will not make money for the manufacturer. If the poodle-o-matic is painted red, then it will make money for the manufacturer. The poodle-o-matic is cheap. Therefore the poodle-o-matic is not painted red.   An argument is a collection of statements that are broken up into premises and a conclusion. However, a random collection of statements, in which there is no inherent connection between those designated as premises and the one designated as conclusion, will not be of much use.    An argument is valid if the conclusion necessarily follows from the premises.    To a mathematician, what logicians call an argument would simply correspond to the statement of a theorem; the justification that an argument is valid would correspond to what mathematicians call the proof of the theorem.    Modus Ponens      "
},
{
  "id": "def-logical-argument",
  "level": "2",
  "url": "sec-valid-arguments.html#def-logical-argument",
  "type": "Definition",
  "number": "1.41",
  "title": "",
  "body": "  A logical argument is a collection of statements, the last of which is the conclusion of the argument, and the rest of which are the premises of the argument.   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-valid-arguments.html#remark-7",
  "type": "Remark",
  "number": "1.42",
  "title": "",
  "body": " The use of the word “argument” in logic is different from the colloquial use of the word, where it could mean the reasons given for thinking that something is true, or it could mean a heated (and not necessarily logical) discussion.  "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec-valid-arguments.html#example-14",
  "type": "Example",
  "number": "1.43",
  "title": "",
  "body": " Consider the following collection of statements, which has a number of premises together with a conclusion.  If the poodle-o-matic is cheap or is energy efficient, then it will not make money for the manufacturer. If the poodle-o-matic is painted red, then it will make money for the manufacturer. The poodle-o-matic is cheap. Therefore the poodle-o-matic is not painted red.  "
},
{
  "id": "def-valid",
  "level": "2",
  "url": "sec-valid-arguments.html#def-valid",
  "type": "Definition",
  "number": "1.44",
  "title": "",
  "body": "  An argument is valid if the conclusion necessarily follows from the premises.   "
},
{
  "id": "sec-quantifiers",
  "level": "1",
  "url": "sec-quantifiers.html",
  "type": "Section",
  "number": "1.4",
  "title": "Quantifiers",
  "body": "Quantifiers   We are now ready for a closer look at the two types of quantifiers that we will use.   Universal Quantifiers   When using variables in a statement , it is often useful to write instead of to indicate that is subject to change. If in a statement both and are variables, and we would denote that by writing .     Let be an expression with free variable . Let denote a collection of possible values of . A universal quantifier applied to is the statement, denoted , which is true if is true for all possible values of in .     If the collection is understood from the context, then we will write .    One way to think of the statement is to view it as the conditional statement “if is in , then is true.”    There are a variety of ways to write in English, for example:   For all values of in , the statement is true;    For each in , the statement is true;    The statement is true for all in ;    All values of in satisfy the .       Let “person has red hair,” and let be the collection of all people in the world. The statement would mean that “all people in the world have red hair” (which is certainly not a true statement).    Changing the collection in a statement of the form can change the truth or falsity of the statement, so that the choice of is crucial.    Let “the number has a square root.” If we let be the collection of positive real numbers, then the statement is true. On the other hand, if we let be the collection of all real numbers, then the statement is false.    For the sake of completeness, we need to allow the case where the collection has nothing in it. In that case, the statement is always true, no matter what is, for the following reason. The statement “ ” is equivalent to the statement “if is in , then is true.” When the collection has nothing in it, then the statement “ is in ” is false, and hence the conditional statement “if is in , then is true” is true.    Existential Quantifiers    Let be a statement with variable , and let denote a collection of possible values of . An existential quantifier applied to is the statement, denoted , which is true if is true for at least one value of in .     If the collection is understood from the context, then we will write .    Observe that if the collection has nothing in it, then the statement is false.   It is important to note that the phrase “at least one value of in ” means one or more, possibly many, or even all in . In particular, if is true, then is true, except in the special case that has nothing in it. However, the statement does not imply that is true, except in the case that has either one thing or nothing in it.   There are a variety of ways to write in English, for example:   There exists some in such that holds;    There is in such that holds;    There exists at least one in such that holds;    For some value of in , the condition holds;    It is the case that is true for some in .       Let “person r has brown hair,” and let be the collection of all people in the world. Then the statement would mean that “there is someone with brown hair,” or equivalently “some people have brown hair” (which is a true statement).    Multiple Quantifiers  We can form statements with more than one quantifier, as long as different quantifiers involve different variables.  The Order of the Quantifiers Matters.  Suppose that where and are real numbers. The statement can then be written in English as “for all there exists some such that ,” or equivalently “for each there is some such that .” This statement is true, because for any real number we can always solve for in terms of , yielding .  If we reverse the order of the quantifiers, we obtain the statement , which can be written in English as “there exists some such that for all , the equation holds.” This statement is false, because for any given , there can be at most two values of such that .    When attempting to prove a theorem, the statement of which involves multiple quantifiers, it is sometimes useful to translate the statement of the theorem into symbols, to help keep track of the meaning of the quantifiers.    Suppose that we are given the statement “if is a non-negative real number, then is a perfect square.” This statement can be interpreted as a doubly quantified statement by rephrasing it as “for each non-negative real number , there is some real number such that .” Written symbolically, the statement is ( in the non-negative real numbers)( in the real numbers)( ).    A lack of attention to the order of quantifiers can easily lead to mistakes in proving theorems that have statements with multiple quantifiers.   There are eight possible generic ways of writing two quantifiers in a statement that has variables. Most of the eight possibilities have different meanings from one another.       . This statement can be written in English as “for each person , for each type of fruit , person likes to eat ,” and more simply as “every person likes every type of fruit.” To verify whether this statement is true, we would have to ask each person in the world if she likes every type of fruit; if even one person does not like one type of fruit, then the statement would be false.     . This statement can be written as “for each type of fruit , for each person , we know likes to eat ,” and more simply as “every type of fruit is liked by every person.” This statement is equivalent to Statement 1.     . This statement can be written as “for each person , there is a type of fruit y such that likes to eat ,” and more simply as “every person likes at least one type of fruit.” To verify whether this statement is true, we would have to ask each person in the world if she likes some type of fruit; if at least one person does not like any type of fruit, then the statement would be false.     . This statement can be written as “there is a person such that for all types of fruit , person likes to eat ,” and more simply as “there is a person who likes every type of fruit.” To verify whether this statement is true, we would start asking one person at a time if she likes every type of fruit; as soon as we found one person who answers yes, we would know that the statement is true, and we could stop asking more people. If no such person is found, then the statement would be false.     . This statement can be written as “for each type of fruit , there is a person such that likes to eat ,” and more simply as “every type of fruit is liked by at least one person.” To verify whether this statement is true, we would have to list all the types of fruit, and then for each type of fruit, ask one person at a time whether she likes the fruit; once we found someone who liked that fruit, we could move onto the next fruit, and again ask one person at a time about it. For the statement to be true, we would have to find at least one person per fruit, though the same person could be selected for more than one fruit.     . This statement can be written as “there is a type of fruit such that for all persons , we know that likes to eat ,” and more simply as “there is a type of fruit that all people like.” To verify whether this statement is true, we would have to list all the types of fruit, and then for one type of fruit at a time, ask each person in the world if she likes that type of fruit; as soon as we found one type of fruit that everyone likes, we would know that the statement is true, and we could stop asking about more types of fruit.     . This statement can be written as “there is a person such that there is a type of fruit such that likes to eat ,” and more simply as “there is a person who likes at least one type of fruit.” To verify whether this statement is true, we would have to start asking one person at a time if she likes some type of fruit; as soon as we found one person who answers yes, we would know that the statement is true, and we could stop asking more people.     . This statement can be written as “there is a type of fruit such that there is a person such that likes to eat ,” and more simply as “there is a type of fruit that is liked by at least one person.” This statement is equivalent to Statement 7.      In the above example we had eight cases, because there were two variables. When there are more variables, then the number of cases will be even larger. Also, we observe that whereas most of the cases in the above example are different from one another, there exist some examples of statements where some of the distinct cases above happen to coincide.   Negating Quantifiers  We now look at the negation of statements with quantifiers.    Let be a statement with variable , which takes values in some collection .    .     .        Unlike the equivalences discussed in Section 1.3, we cannot use truth tables to verify the equivalences in , though they are true nonetheless, based on the meanings of the quantifiers.   We can use the above equivalences to negate statements with more than one quantifier.   Suppose that is a function that takes real numbers to real numbers (for example for all real numbers ). Let “for each real number , there is some real number such that .” We would like to find . We start by writing symbolically. Let Then . Using our equivalences we have ¬Q ⇔ ¬[(∀w)(∃y)P(w, y)] ⇔ (∃w)¬[(∃y)P(w, y)] ⇔ (∃w)(∀y)(¬P(w, y)). Rephrasing this last expression in English yields “there exists a real number such that for all real numbers , the relation holds.   It is often easier to negate statements with multiple quantifiers by first translating them into symbolic form, negating them symbolically and then translating back into English. With a bit of practice it is possible to negate such statements directly in English as well, as long as the statements are not too complicated.   "
},
{
  "id": "convention-4",
  "level": "2",
  "url": "sec-quantifiers.html#convention-4",
  "type": "Convention",
  "number": "1.45",
  "title": "",
  "body": " When using variables in a statement , it is often useful to write instead of to indicate that is subject to change. If in a statement both and are variables, and we would denote that by writing .  "
},
{
  "id": "def-universal-quantifier",
  "level": "2",
  "url": "sec-quantifiers.html#def-universal-quantifier",
  "type": "Definition",
  "number": "1.46",
  "title": "",
  "body": "  Let be an expression with free variable . Let denote a collection of possible values of . A universal quantifier applied to is the statement, denoted , which is true if is true for all possible values of in .   "
},
{
  "id": "convention-5",
  "level": "2",
  "url": "sec-quantifiers.html#convention-5",
  "type": "Convention",
  "number": "1.47",
  "title": "",
  "body": " If the collection is understood from the context, then we will write .  "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-quantifiers.html#remark-8",
  "type": "Remark",
  "number": "1.48",
  "title": "",
  "body": " One way to think of the statement is to view it as the conditional statement “if is in , then is true.”  "
},
{
  "id": "convention-6",
  "level": "2",
  "url": "sec-quantifiers.html#convention-6",
  "type": "Convention",
  "number": "1.49",
  "title": "",
  "body": " There are a variety of ways to write in English, for example:   For all values of in , the statement is true;    For each in , the statement is true;    The statement is true for all in ;    All values of in satisfy the .     "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-quantifiers.html#example-15",
  "type": "Example",
  "number": "1.50",
  "title": "",
  "body": " Let “person has red hair,” and let be the collection of all people in the world. The statement would mean that “all people in the world have red hair” (which is certainly not a true statement).  "
},
{
  "id": "warning-4",
  "level": "2",
  "url": "sec-quantifiers.html#warning-4",
  "type": "Warning",
  "number": "1.51",
  "title": "",
  "body": " Changing the collection in a statement of the form can change the truth or falsity of the statement, so that the choice of is crucial.  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-quantifiers.html#example-16",
  "type": "Example",
  "number": "1.52",
  "title": "",
  "body": " Let “the number has a square root.” If we let be the collection of positive real numbers, then the statement is true. On the other hand, if we let be the collection of all real numbers, then the statement is false.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-quantifiers.html#example-17",
  "type": "Example",
  "number": "1.53",
  "title": "",
  "body": " For the sake of completeness, we need to allow the case where the collection has nothing in it. In that case, the statement is always true, no matter what is, for the following reason. The statement “ ” is equivalent to the statement “if is in , then is true.” When the collection has nothing in it, then the statement “ is in ” is false, and hence the conditional statement “if is in , then is true” is true.  "
},
{
  "id": "def-existential-quantifier",
  "level": "2",
  "url": "sec-quantifiers.html#def-existential-quantifier",
  "type": "Definition",
  "number": "1.54",
  "title": "",
  "body": "  Let be a statement with variable , and let denote a collection of possible values of . An existential quantifier applied to is the statement, denoted , which is true if is true for at least one value of in .   "
},
{
  "id": "convention-7",
  "level": "2",
  "url": "sec-quantifiers.html#convention-7",
  "type": "Convention",
  "number": "1.55",
  "title": "",
  "body": " If the collection is understood from the context, then we will write .  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-quantifiers.html#remark-9",
  "type": "Remark",
  "number": "1.56",
  "title": "",
  "body": " Observe that if the collection has nothing in it, then the statement is false.  "
},
{
  "id": "convention-8",
  "level": "2",
  "url": "sec-quantifiers.html#convention-8",
  "type": "Convention",
  "number": "1.57",
  "title": "",
  "body": " There are a variety of ways to write in English, for example:   There exists some in such that holds;    There is in such that holds;    There exists at least one in such that holds;    For some value of in , the condition holds;    It is the case that is true for some in .     "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-quantifiers.html#example-18",
  "type": "Example",
  "number": "1.58",
  "title": "",
  "body": " Let “person r has brown hair,” and let be the collection of all people in the world. Then the statement would mean that “there is someone with brown hair,” or equivalently “some people have brown hair” (which is a true statement).  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-quantifiers.html#example-19",
  "type": "Example",
  "number": "1.59",
  "title": "The Order of the Quantifiers Matters..",
  "body": "The Order of the Quantifiers Matters.  Suppose that where and are real numbers. The statement can then be written in English as “for all there exists some such that ,” or equivalently “for each there is some such that .” This statement is true, because for any real number we can always solve for in terms of , yielding .  If we reverse the order of the quantifiers, we obtain the statement , which can be written in English as “there exists some such that for all , the equation holds.” This statement is false, because for any given , there can be at most two values of such that .  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-quantifiers.html#remark-10",
  "type": "Remark",
  "number": "1.60",
  "title": "",
  "body": " When attempting to prove a theorem, the statement of which involves multiple quantifiers, it is sometimes useful to translate the statement of the theorem into symbols, to help keep track of the meaning of the quantifiers.  "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-quantifiers.html#example-20",
  "type": "Example",
  "number": "1.61",
  "title": "",
  "body": " Suppose that we are given the statement “if is a non-negative real number, then is a perfect square.” This statement can be interpreted as a doubly quantified statement by rephrasing it as “for each non-negative real number , there is some real number such that .” Written symbolically, the statement is ( in the non-negative real numbers)( in the real numbers)( ).  "
},
{
  "id": "warning-5",
  "level": "2",
  "url": "sec-quantifiers.html#warning-5",
  "type": "Warning",
  "number": "1.62",
  "title": "",
  "body": " A lack of attention to the order of quantifiers can easily lead to mistakes in proving theorems that have statements with multiple quantifiers.  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-quantifiers.html#example-21",
  "type": "Example",
  "number": "1.63",
  "title": "",
  "body": "     . This statement can be written in English as “for each person , for each type of fruit , person likes to eat ,” and more simply as “every person likes every type of fruit.” To verify whether this statement is true, we would have to ask each person in the world if she likes every type of fruit; if even one person does not like one type of fruit, then the statement would be false.     . This statement can be written as “for each type of fruit , for each person , we know likes to eat ,” and more simply as “every type of fruit is liked by every person.” This statement is equivalent to Statement 1.     . This statement can be written as “for each person , there is a type of fruit y such that likes to eat ,” and more simply as “every person likes at least one type of fruit.” To verify whether this statement is true, we would have to ask each person in the world if she likes some type of fruit; if at least one person does not like any type of fruit, then the statement would be false.     . This statement can be written as “there is a person such that for all types of fruit , person likes to eat ,” and more simply as “there is a person who likes every type of fruit.” To verify whether this statement is true, we would start asking one person at a time if she likes every type of fruit; as soon as we found one person who answers yes, we would know that the statement is true, and we could stop asking more people. If no such person is found, then the statement would be false.     . This statement can be written as “for each type of fruit , there is a person such that likes to eat ,” and more simply as “every type of fruit is liked by at least one person.” To verify whether this statement is true, we would have to list all the types of fruit, and then for each type of fruit, ask one person at a time whether she likes the fruit; once we found someone who liked that fruit, we could move onto the next fruit, and again ask one person at a time about it. For the statement to be true, we would have to find at least one person per fruit, though the same person could be selected for more than one fruit.     . This statement can be written as “there is a type of fruit such that for all persons , we know that likes to eat ,” and more simply as “there is a type of fruit that all people like.” To verify whether this statement is true, we would have to list all the types of fruit, and then for one type of fruit at a time, ask each person in the world if she likes that type of fruit; as soon as we found one type of fruit that everyone likes, we would know that the statement is true, and we could stop asking about more types of fruit.     . This statement can be written as “there is a person such that there is a type of fruit such that likes to eat ,” and more simply as “there is a person who likes at least one type of fruit.” To verify whether this statement is true, we would have to start asking one person at a time if she likes some type of fruit; as soon as we found one person who answers yes, we would know that the statement is true, and we could stop asking more people.     . This statement can be written as “there is a type of fruit such that there is a person such that likes to eat ,” and more simply as “there is a type of fruit that is liked by at least one person.” This statement is equivalent to Statement 7.     "
},
{
  "id": "fact-quantifier-negation",
  "level": "2",
  "url": "sec-quantifiers.html#fact-quantifier-negation",
  "type": "Fact",
  "number": "1.64",
  "title": "",
  "body": "  Let be a statement with variable , which takes values in some collection .    .     .      "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-quantifiers.html#remark-11",
  "type": "Remark",
  "number": "1.65",
  "title": "",
  "body": " Unlike the equivalences discussed in Section 1.3, we cannot use truth tables to verify the equivalences in , though they are true nonetheless, based on the meanings of the quantifiers.  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-quantifiers.html#example-22",
  "type": "Example",
  "number": "1.66",
  "title": "",
  "body": " Suppose that is a function that takes real numbers to real numbers (for example for all real numbers ). Let “for each real number , there is some real number such that .” We would like to find . We start by writing symbolically. Let Then . Using our equivalences we have ¬Q ⇔ ¬[(∀w)(∃y)P(w, y)] ⇔ (∃w)¬[(∃y)P(w, y)] ⇔ (∃w)(∀y)(¬P(w, y)). Rephrasing this last expression in English yields “there exists a real number such that for all real numbers , the relation holds.  "
},
{
  "id": "direct-proof",
  "level": "1",
  "url": "direct-proof.html",
  "type": "Section",
  "number": "2.1",
  "title": "Direct Proof",
  "body": "Direct Proof  Direct Proofs  Theorems are not proved in a vacuum. To prove one theorem, we usually need to use various relevant definitions, and theorems that have already been proved. If we do not want to keep going backwards infinitely, we need to start with some objects that we use without definition, as well as some facts about these objects that are assumed without proof. Such facts are called axioms, and a body of knowledge that can be derived from a set of axioms is called an axiomatic system.  In modern abstract mathematics, we take set theory as our basis for all arguments.  As a basis for our work in the present chapter, we will make use of standard definitions and properties of the familiar number systems such as the integers, rational numbers and real numbers.  The statement of virtually every theorem, when viewed appropriately, is of the form P → Q, or some combination of such statements. To prove theorems, we therefore need to know how to prove statements of the form P → Q.    The most intuitive form of proof, which we treat in this section, is called a direct proof : assume that is true, and produce a series of steps, each one following from the previous ones, which eventually lead to .    That this sort of proof deserves a name is because there are other approaches that can be taken, as we will soon see.  Direct proofs, when completed, typically have the following form.   Suppose that is true. ... (argumentation) ... Then is true.   When constructing a proof, the first thing to do is specify what you are assuming, and what it is you are trying to prove. Then you pick a strategy for the proof; one such strategy is direct proof. The next stage is actually figuring out a proof, making use of your chosen strategy. If you cannot devise a proof using your chosen strategy, perhaps another strategy should be attempted. There is no fixed way of finding a proof; it requires experimentation, playing around and trying different things.  You are probably familiar with the statement “the sum of even numbers is even.” This statement can be viewed in the form P → Q if we look at it properly, because it actually says “if n and m are even numbers, then n + m is an even number. To construct a rigorous proof of our statement (as well as the corresponding result for odd numbers), we first need precise definitions of the terms involved.  Our theorem is concerned with the integers, that is, the numbers . . . , −3, −2, −1, 0, 1, 2, 3, . . . , and so we need to assume that we know what the integers are, that we have the operations addition, subtraction, multiplication and division, and that these operations satisfy standard properties, for example the Distributive Law. Using only those standard facts about the integers, we can make the following definition, which is the basis for our theorem and its proof.    Let be an integer. The number is even if there is some integer such that . The number is odd if there is some integer such that .    We are now ready to state and prove our theorem.    Let and be integers.   If and are both even, then is even.    If and m are both odd, then is even.    If is even and is odd, then is odd.          Suppose that and are both even. Then there exist integers and such that and . Then Because and are integers, so is . Hence is even.    Combing soon!    Combing soon!        There is a fourth possible case we did not state in , namely, the case when is odd and is even, because that case is really no different from Part (3) of the theorem, and hence it would not tell us anything new; it makes no difference whether we call the even number and the odd number , or vice versa.   The proof of Part (1) of Theorem 2.1.3 is quite simple, but there are a few features worth mentioning, because they are typical of what is found in virtually all our subsequent proofs (and in the proofs you will need to write). First, the proof relies completely on the definition of what it means to be an even or an odd integer. In a large number of proofs, going back to the formal definitions involved is the key step; forgetting to do so is a major source of error by students who are first learning about proofs.  Second, observe that the proof is written in grammatically correct English. Complete sentences are used, with proper punctuation. Each sentence begins with a capital letter, and ends with a period, even if the end of the sentence is in a displayed equation. Mathematical formulas and symbols are parts of sentences, and are treated no differently from other words.    Let and be integers. The number  divides the number if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by .     It is customary in definitions to write “if” rather than “if and only if,” because it is taken as assumed that if the condition does not hold, then the term being defined cannot be applied.     Let , and be integers. If and , then .    Suppose that and . Hence there are integers and such that and . Define the integer by . Then . Because , it follows that .      Any integer divides zero.    Let be an integer. Observe that . Hence .     Let be an integer. Prove that if is even then is even, and if is odd then is odd.    "
},
{
  "id": "def-direct-proof",
  "level": "2",
  "url": "direct-proof.html#def-direct-proof",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  The most intuitive form of proof, which we treat in this section, is called a direct proof : assume that is true, and produce a series of steps, each one following from the previous ones, which eventually lead to .   "
},
{
  "id": "insight-1",
  "level": "2",
  "url": "direct-proof.html#insight-1",
  "type": "Structure",
  "number": "2.2",
  "title": "",
  "body": " Suppose that is true. ... (argumentation) ... Then is true.  "
},
{
  "id": "def-even-odd",
  "level": "2",
  "url": "direct-proof.html#def-even-odd",
  "type": "Definition",
  "number": "2.3",
  "title": "",
  "body": "  Let be an integer. The number is even if there is some integer such that . The number is odd if there is some integer such that .   "
},
{
  "id": "thm-even-odd",
  "level": "2",
  "url": "direct-proof.html#thm-even-odd",
  "type": "Theorem",
  "number": "2.4",
  "title": "",
  "body": "  Let and be integers.   If and are both even, then is even.    If and m are both odd, then is even.    If is even and is odd, then is odd.          Suppose that and are both even. Then there exist integers and such that and . Then Because and are integers, so is . Hence is even.    Combing soon!    Combing soon!      "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "direct-proof.html#remark-12",
  "type": "Remark",
  "number": "2.5",
  "title": "",
  "body": " There is a fourth possible case we did not state in , namely, the case when is odd and is even, because that case is really no different from Part (3) of the theorem, and hence it would not tell us anything new; it makes no difference whether we call the even number and the odd number , or vice versa.  "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "direct-proof.html#def-divides",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": "  Let and be integers. The number  divides the number if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by .   "
},
{
  "id": "convention-9",
  "level": "2",
  "url": "direct-proof.html#convention-9",
  "type": "Convention",
  "number": "2.7",
  "title": "",
  "body": " It is customary in definitions to write “if” rather than “if and only if,” because it is taken as assumed that if the condition does not hold, then the term being defined cannot be applied.  "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "direct-proof.html#theorem-2",
  "type": "Theorem",
  "number": "2.8",
  "title": "",
  "body": "  Let , and be integers. If and , then .    Suppose that and . Hence there are integers and such that and . Define the integer by . Then . Because , it follows that .   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "direct-proof.html#theorem-3",
  "type": "Theorem",
  "number": "2.9",
  "title": "",
  "body": "  Any integer divides zero.    Let be an integer. Observe that . Hence .   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "direct-proof.html#exercise-2",
  "type": "Exploration",
  "number": "2.10",
  "title": "",
  "body": " Let be an integer. Prove that if is even then is even, and if is odd then is odd.  "
},
{
  "id": "sec-contrapositive-contradiction",
  "level": "1",
  "url": "sec-contrapositive-contradiction.html",
  "type": "Section",
  "number": "2.2",
  "title": "Contrapositive, Contradiction",
  "body": "Contrapositive, Contradiction   In this section we discuss two strategies for proving statements of the form . Both these strategies are a bit more convoluted than direct proof, but in some situations they are nonetheless easier to work with. A less than perfect analogy might be when the straightest road between two cities leads up and down a mountain and through difficult terrain, whereas a curved road might at first seem to be going in the wrong direction, but in fact it bypasses the mountain and is ultimately easier and quicker than the straight road.   Contrapositive  Recall .    In order to prove , we could just as well prove , which we would do by the method of direct proof. We construct such a proof by assuming that is false, and then, in the final write-up, presenting a step-by-step argument going from to . A proof of this sort is called proof by contrapositive .     Suppose that is false. ... (argumentation) ... Then is false.     Let be an integer. If is odd, then is odd.    Suppose that is even. Then there is some integer such that . Hence . Because is an integer, it follows that is even. By contrapositive, we see that if is odd then n is odd.     In the above proof we mentioned that we used proof by contrapositive. In general, it is often helpful to the reader to have the method of proof stated explicitly.    Contradiction  Another method of proof for theorems with statements of the form , which looks similar to proof by contrapositive but is actually distinct from it, is proof by contradiction.    The method of proof by contradiction is to show that is true by assuming that is true, and then deriving a logical contradiction, by which we mean a statement that cannot be true under any circumstances.    Logicians use the term “proof by contradiction” to mean the proof of a statement by assuming , then reaching a contradiction, and then deducing that must be true. For our purposes, we are interested in proof by contradiction for the special case where the statement has the form , because that is how mathematical theorems are formulated.   We prove the result by contradiction. Suppose that is true and that is false. ... (argumentation) ... We have therefore reached a contradiction. Therefore implies .     The only consecutive non-negative integers , and that satisfy are , and .    We prove the result by contradiction. Suppose that , and are non-negative consecutive integers other than , and , and that . Because a, b and c are not 3, 4 and 5, we know that a \\neq 3, and because the three numbers are consecutive, we know that b = a + 1 and c = a + 2. From we deduce that . After expanding and rearranging we obtain . This equation factors as . Hence . We have already remarked that , and we know a is non-negative. Therefore we have a contradiction, and the theorem is proved.    Our next two theorems are both famous results that have well-known proofs by contradiction. These clever proofs are much more difficult than what we have seen so far, and are more than would be expected of a student to figure out on her own at this point.    Let be a real number. The number is a rational number if there exist integers and such that and . If is not a rational number, it is an irrational number.     Observe that if x is a rational number, then there are many different fractions of the form n m such that x = n m. Given any fraction n m such that n 6 = 0, we can always reduce it to “lowest terms,” by which we mean that the numerator and denominator have no common factors other than 1 and −1.     Let be a positive real number. The square root of , denoted , is a positive real number such that .      There is no rational number such that .    Let be a real number. Suppose that , and that is rational. We will derive a contradiction. Because is rational, there are integers and such that . Observe that . If is not in lowest terms, then we could cancel any common factors, bringing it to lowest terms. There is no problem assuming that this has been done already, and so we may assume that n and m have no common factors other than and .  Because , then . It follows that , and hence . We now ask whether is even or odd. If were odd, then using Exercise 2.2.4 we would see that would be odd. This last statement is not possible, because , and must be even, because it is divisible by . It follows that cannot be odd; hence must be even. Therefore there is some integer such that . Then , so that , and therefore . By an argument similar to the one used above, we see that is even. We therefore conclude that both and are even. We have therefore reached a contradiction, because any two even numbers have as a common factor, and yet we assumed that and have no common factors other than and . Hence is not rational.      Let be an integer greater than . The number is a prime number iff the only positive integers that divide are and . The number is a composite number iff it is not a prime number.     Prove that the product of a non-zero rational number and an irrational number is irrational.    "
},
{
  "id": "def-contrapositive-proof",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#def-contrapositive-proof",
  "type": "Definition",
  "number": "2.11",
  "title": "",
  "body": "  In order to prove , we could just as well prove , which we would do by the method of direct proof. We construct such a proof by assuming that is false, and then, in the final write-up, presenting a step-by-step argument going from to . A proof of this sort is called proof by contrapositive .   "
},
{
  "id": "insight-2",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#insight-2",
  "type": "Structure",
  "number": "2.12",
  "title": "",
  "body": " Suppose that is false. ... (argumentation) ... Then is false.  "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#theorem-4",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": "  Let be an integer. If is odd, then is odd.    Suppose that is even. Then there is some integer such that . Hence . Because is an integer, it follows that is even. By contrapositive, we see that if is odd then n is odd.   "
},
{
  "id": "convention-10",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#convention-10",
  "type": "Convention",
  "number": "2.14",
  "title": "",
  "body": " In the above proof we mentioned that we used proof by contrapositive. In general, it is often helpful to the reader to have the method of proof stated explicitly.  "
},
{
  "id": "def-contradiction-proof",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#def-contradiction-proof",
  "type": "Definition",
  "number": "2.15",
  "title": "",
  "body": "  The method of proof by contradiction is to show that is true by assuming that is true, and then deriving a logical contradiction, by which we mean a statement that cannot be true under any circumstances.   "
},
{
  "id": "insight-3",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#insight-3",
  "type": "Structure",
  "number": "2.16",
  "title": "",
  "body": " We prove the result by contradiction. Suppose that is true and that is false. ... (argumentation) ... We have therefore reached a contradiction. Therefore implies .  "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#theorem-5",
  "type": "Theorem",
  "number": "2.17",
  "title": "",
  "body": "  The only consecutive non-negative integers , and that satisfy are , and .    We prove the result by contradiction. Suppose that , and are non-negative consecutive integers other than , and , and that . Because a, b and c are not 3, 4 and 5, we know that a \\neq 3, and because the three numbers are consecutive, we know that b = a + 1 and c = a + 2. From we deduce that . After expanding and rearranging we obtain . This equation factors as . Hence . We have already remarked that , and we know a is non-negative. Therefore we have a contradiction, and the theorem is proved.   "
},
{
  "id": "def-rational-number",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#def-rational-number",
  "type": "Definition",
  "number": "2.18",
  "title": "",
  "body": "  Let be a real number. The number is a rational number if there exist integers and such that and . If is not a rational number, it is an irrational number.   "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#remark-13",
  "type": "Remark",
  "number": "2.19",
  "title": "",
  "body": " Observe that if x is a rational number, then there are many different fractions of the form n m such that x = n m. Given any fraction n m such that n 6 = 0, we can always reduce it to “lowest terms,” by which we mean that the numerator and denominator have no common factors other than 1 and −1.  "
},
{
  "id": "def-square-root",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#def-square-root",
  "type": "Definition",
  "number": "2.20",
  "title": "",
  "body": "  Let be a positive real number. The square root of , denoted , is a positive real number such that .   "
},
{
  "id": "thm-sqrt-2-irrational",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#thm-sqrt-2-irrational",
  "type": "Theorem",
  "number": "2.21",
  "title": "",
  "body": "  There is no rational number such that .    Let be a real number. Suppose that , and that is rational. We will derive a contradiction. Because is rational, there are integers and such that . Observe that . If is not in lowest terms, then we could cancel any common factors, bringing it to lowest terms. There is no problem assuming that this has been done already, and so we may assume that n and m have no common factors other than and .  Because , then . It follows that , and hence . We now ask whether is even or odd. If were odd, then using Exercise 2.2.4 we would see that would be odd. This last statement is not possible, because , and must be even, because it is divisible by . It follows that cannot be odd; hence must be even. Therefore there is some integer such that . Then , so that , and therefore . By an argument similar to the one used above, we see that is even. We therefore conclude that both and are even. We have therefore reached a contradiction, because any two even numbers have as a common factor, and yet we assumed that and have no common factors other than and . Hence is not rational.   "
},
{
  "id": "def-prime-number",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#def-prime-number",
  "type": "Definition",
  "number": "2.22",
  "title": "",
  "body": "  Let be an integer greater than . The number is a prime number iff the only positive integers that divide are and . The number is a composite number iff it is not a prime number.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-contrapositive-contradiction.html#exercise-3",
  "type": "Exploration",
  "number": "2.23",
  "title": "",
  "body": " Prove that the product of a non-zero rational number and an irrational number is irrational.  "
},
{
  "id": "other-structures",
  "level": "1",
  "url": "other-structures.html",
  "type": "Section",
  "number": "2.3",
  "title": "Other Proof Structures",
  "body": "Other Proof Structures   The notion of equivalence of statements has already been seen to be useful in proving theorems, for example in proof by contrapositive. In this section we will make use of some other equivalences of statements to prove certain types of theorems.   Cases   One commonly used method for proving a statement of the form P → Q is by breaking up the proof into a number of cases (and possibly subcases, subsubcases and so on).   Formally, we use proof by cases when the premise P can be written in the form A ∨ B. We then use Exercise 1.3.2 (6) to see that (A ∨ B) → Q is equivalent to (A → Q) ∧ (B → Q). Hence, in order to prove that a statement of the form (A ∨ B) → Q is true, it is sufficient to prove that each of the statements A → Q and B → Q is true.   The use of this strategy often occurs when proving a statement involving a quantifier of the form “for all x in U,” and where no single proof can be found for all such x, but where U can be divided up into two or more parts, and where a proof can be found for each part.     Let n be an integer. Then n^2 + n is even.     In the proof of Theorem 2.4.1 we had two cases, which together covered all possibilities, and which were exclusive of each other. It is certainly possible to have more than two cases, and it is also possible to have non-exclusive cases; all that is needed is that all the cases combined cover all possibilities. The proof of Theorem 2.4.4 below has two non-exclusive cases.   We now turn to theorems that have statements of the form P → (A ∨ B). Such theorems are less common than the previously discussed type, but do occur, and it is worth being familiar with the standard proof strategies for such theorems.   There are two commonly used strategies, each one being advantageous in certain situations. One approach would be to use the contrapositive together with De Morgan’s Law (Fact 1.3.2 (13)), which together imply that P → (A∨B) is equivalent to (¬A∧¬B) → ¬P. The other would be to use Exercise 1.3.2 (5), which says that P → (A ∨ B) is equivalent to (P ∧ ¬A) → B. The roles of A and B could also be interchanged in this last statement.     Let x and y be real numbers. If xy is irrational, then x or y is irrational.    Suppose that xy is irrational and that x is rational. Hence x = a b for some integers a and b such that b 6 = 0. We will show that y is irrational, by using proof by contradiction. Suppose that y is rational. It follows that y = m n for some integers m and n such that n 6 = 0. Hence xy = am bn , and bn 6 = 0, contradicting the fact that xy is irrational. Hence y is irrational.     If and Only If  Whereas the most common logical form of the statement of a theorem is P → Q, as we have discussed so far, another common form is P ↔ Q. We refer to such theorems as “if and only if” theorems (often abbreviated “iff” theorems). To prove such a theorem, we make use of the fact that P ↔ Q is equivalent to (P → Q) ∧ (Q → P), as was shown in Fact 1.3.2 (11). Hence, to prove a single statement of the form P ↔ Q, it is sufficient to prove the two statements P → Q and Q → P, each of which can be proved using any of the methods we have seen so far.    Let a and b be non-zero integers. Then a|b and b|a if and only if a = b or a = −b.    ⇒. Suppose that a|b and b|a. Because a|b, there is some integer m such that am = b, and because b|a, there is some integer k such that bk = a. Substituting this last equation into the previous one, we obtain (bk)m = b, and hence b(km) = b. Because b 6 = 0, it follows that km = 1. Because k and m are integers, then either k = 1 and m = 1, or k = −1 and m = −1. (We will not provide a proof of this last fact; it is stated as Theorem A.4 in the Appendix.) In the former case a = b, and in the latter case a = −b.  ⇐. Suppose that a = b or a = −b. First, suppose that a = b. Then a · 1 = b, so a|b, and b · 1 = a, so b|a. Similarly, suppose that a = −b. Then a · (−1) = b, so a|b, and b · (−1) = a, so b|a.      Let m and n be integers. Then mn is odd if and only if both m and n are odd.    ⇐. Suppose that m and n are both odd. Hence there is an integer j such that m = 2 j + 1, and there is an integer k such that n = 2k + 1. Therefore mn = (2 j + 1)(2k + 1) = 4 jk + 2 j + 2k + 1 = 2(2 jk + j + k) + 1. Because k and j are integers, so is 2 jk + j + k. Therefore mn is odd.  ⇒. Suppose that m and n are not both odd. We will deduce that mn is not odd, and the desired result will follow by contrapositive. If m and n are not both odd, then at least one of them is even. Suppose first that m is even. Then there is an integer p such that m = 2p. Hence mn = (2p)n = 2(pn). Because p and n are integers, so is pn. Therefore mn is even. Next assume that n is even. The proof in this case is similar to the previous case, and we omit the details.     The Following are Equivalent  A slightly more built-up version of an if and only if theorem is a theorem that states that three or more statements are all mutually equivalent. Such theorems often include the phrase “the following are equivalent,” sometimes abbreviated “TFAE.”   "
},
{
  "id": "convention-11",
  "level": "2",
  "url": "other-structures.html#convention-11",
  "type": "Convention",
  "number": "2.24",
  "title": "",
  "body": " One commonly used method for proving a statement of the form P → Q is by breaking up the proof into a number of cases (and possibly subcases, subsubcases and so on).  "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "other-structures.html#remark-14",
  "type": "Remark",
  "number": "2.25",
  "title": "",
  "body": " The use of this strategy often occurs when proving a statement involving a quantifier of the form “for all x in U,” and where no single proof can be found for all such x, but where U can be divided up into two or more parts, and where a proof can be found for each part.  "
},
{
  "id": "thm-even-square-plus-n",
  "level": "2",
  "url": "other-structures.html#thm-even-square-plus-n",
  "type": "Theorem",
  "number": "2.26",
  "title": "",
  "body": "  Let n be an integer. Then n^2 + n is even.   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "other-structures.html#remark-15",
  "type": "Remark",
  "number": "2.27",
  "title": "",
  "body": " In the proof of Theorem 2.4.1 we had two cases, which together covered all possibilities, and which were exclusive of each other. It is certainly possible to have more than two cases, and it is also possible to have non-exclusive cases; all that is needed is that all the cases combined cover all possibilities. The proof of Theorem 2.4.4 below has two non-exclusive cases.  "
},
{
  "id": "convention-12",
  "level": "2",
  "url": "other-structures.html#convention-12",
  "type": "Convention",
  "number": "2.28",
  "title": "",
  "body": " There are two commonly used strategies, each one being advantageous in certain situations. One approach would be to use the contrapositive together with De Morgan’s Law (Fact 1.3.2 (13)), which together imply that P → (A∨B) is equivalent to (¬A∧¬B) → ¬P. The other would be to use Exercise 1.3.2 (5), which says that P → (A ∨ B) is equivalent to (P ∧ ¬A) → B. The roles of A and B could also be interchanged in this last statement.  "
},
{
  "id": "thm-irrational-product",
  "level": "2",
  "url": "other-structures.html#thm-irrational-product",
  "type": "Theorem",
  "number": "2.29",
  "title": "",
  "body": "  Let x and y be real numbers. If xy is irrational, then x or y is irrational.    Suppose that xy is irrational and that x is rational. Hence x = a b for some integers a and b such that b 6 = 0. We will show that y is irrational, by using proof by contradiction. Suppose that y is rational. It follows that y = m n for some integers m and n such that n 6 = 0. Hence xy = am bn , and bn 6 = 0, contradicting the fact that xy is irrational. Hence y is irrational.   "
},
{
  "id": "thm-mutual-divide",
  "level": "2",
  "url": "other-structures.html#thm-mutual-divide",
  "type": "Theorem",
  "number": "2.30",
  "title": "",
  "body": "  Let a and b be non-zero integers. Then a|b and b|a if and only if a = b or a = −b.    ⇒. Suppose that a|b and b|a. Because a|b, there is some integer m such that am = b, and because b|a, there is some integer k such that bk = a. Substituting this last equation into the previous one, we obtain (bk)m = b, and hence b(km) = b. Because b 6 = 0, it follows that km = 1. Because k and m are integers, then either k = 1 and m = 1, or k = −1 and m = −1. (We will not provide a proof of this last fact; it is stated as Theorem A.4 in the Appendix.) In the former case a = b, and in the latter case a = −b.  ⇐. Suppose that a = b or a = −b. First, suppose that a = b. Then a · 1 = b, so a|b, and b · 1 = a, so b|a. Similarly, suppose that a = −b. Then a · (−1) = b, so a|b, and b · (−1) = a, so b|a.   "
},
{
  "id": "thm-odd-product",
  "level": "2",
  "url": "other-structures.html#thm-odd-product",
  "type": "Theorem",
  "number": "2.31",
  "title": "",
  "body": "  Let m and n be integers. Then mn is odd if and only if both m and n are odd.    ⇐. Suppose that m and n are both odd. Hence there is an integer j such that m = 2 j + 1, and there is an integer k such that n = 2k + 1. Therefore mn = (2 j + 1)(2k + 1) = 4 jk + 2 j + 2k + 1 = 2(2 jk + j + k) + 1. Because k and j are integers, so is 2 jk + j + k. Therefore mn is odd.  ⇒. Suppose that m and n are not both odd. We will deduce that mn is not odd, and the desired result will follow by contrapositive. If m and n are not both odd, then at least one of them is even. Suppose first that m is even. Then there is an integer p such that m = 2p. Hence mn = (2p)n = 2(pn). Because p and n are integers, so is pn. Therefore mn is even. Next assume that n is even. The proof in this case is similar to the previous case, and we omit the details.   "
},
{
  "id": "sec-set-basics",
  "level": "1",
  "url": "sec-set-basics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Set Basics",
  "body": "Set Basics     Natural Numbers  the set of natural numbers  , denoted ;   Integers  the set of integers  , denoted ;   Rational Numbers  the set of rational numbers , denoted , which is the set of fractions;   Real Numbers  the set of real numbers , denoted , which is the set of all the numbers that are informally thought of as forming the number line.       An extremely valuable set we will regularly encounter is the empty set (also called the null set) which is the set that does not have any elements in it. That is, the empty set is the set . This set is denoted .   It may seem strange to consider a set that doesn't have anything in it, but the role of the empty set in set theory is somewhat analogous to the role of zero in arithmetic.  Set Builder Notation      Let and be sets. The set is a subset of the set , denoted , if implies . If is not a subset of , we write .    Subset Proof  There is a standard strategy for proving a statement of the form “ ,” which is to take an arbitrary element , and then to use the definitions of and to deduce that . Such a proof typically has the following form.  Proof. Let . ... (argumentation) ... Then . Hence .    It is important to distinguish between the notion of an object being an element of a set, and the notion of a set being a subset of another set. For example, let . Then and are true, whereas the statements “ ” and “ ” are false. Also, observe that a set can be an element of another set. Let . Observe that is not the same as the set . Then and are true, but “ ” and “ ” are false.                  If and , then .          To show that , we start by choosing an arbitrary element , where we think of this “ ” as the one on the left-hand side of the expression “ .” It then follows that , where we now think of this “ ” as the one on the right-hand side of the expression “ .” Hence , using the definition of subsets.    We give two proofs, because both are instructive. First, we have a direct proof. To show that , we need to show that if , then . Because is always false, then the logical implication “if , then ” is always true, using the precise definition of the conditional given in Section 1.2.  Next, we have a proof by contradiction. Suppose that . Then there exists some such that . This statement cannot be true, however, because there is no such that . We have therefore reached a contradiction, and hence the desired result is true.  This proof by contradiction might not appear to fit the standard outline for such proofs as described in Section 2.3, because it does not appear as if we are viewing the statement being proved as having the form . In fact, there are two ways of viewing the statement being proved as having this form. For the direct proof given above, we viewed the statement being proved as . We then chose an arbitrary set , and proved the statement . For the proof by contradiction, we viewed the statement being proved as “if is a set, then ,” and then indeed used our standard method of doing proof by contradiction.    This proof, having no logical tricks, is extremely typical. Let . Because , it follows that . Because , it follows that . Therefore we see that implies , and hence .         Let and be sets. The set  equals the set , denoted , if and . The set is a proper subset of the set , denoted , if and .     There is a bit of variation in the mathematical literature for the notation used for proper subsets. Some texts use to mean is a proper subset of , whereas others use the notation to mean what we write as .    Proof. Let . ... (argumentation) ... Then . Therefore . Next, Let . ... (argumentation) ... Then . Hence . We conclude that .     Let and be sets.    .    If then .    If and , then .       All three parts of this lemma follow straightforwardly from the definition of equality of sets together with Lemma 3.2.4. Details are left to the reader.    In some situations we will find it useful to look at not just one subset of a given set, but at all subsets of the set. In particular, we can form a new set, the elements of which are the subsets of the given set.    Let be a set. The power set of , denoted , is the set defined by .        Because , then . In particular, we see that .    Let . Then the subsets of are . The last of these subsets is not proper, but we need all subsets, not only the proper ones. Therefore It can be seen intuitively that if is a finite set with n elements, then is a finite set with elements; by Part (1) of this exercise we see that this formula holds even when . This formula is proved in Theorem 7.7.10 (1).       Let and be sets. Prove that it is not possible that and are both true.   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-set-basics.html#example-23",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": "   Natural Numbers  the set of natural numbers  , denoted ;   Integers  the set of integers  , denoted ;   Rational Numbers  the set of rational numbers , denoted , which is the set of fractions;   Real Numbers  the set of real numbers , denoted , which is the set of all the numbers that are informally thought of as forming the number line.     "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-set-basics.html#example-24",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " An extremely valuable set we will regularly encounter is the empty set (also called the null set) which is the set that does not have any elements in it. That is, the empty set is the set . This set is denoted .  "
},
{
  "id": "convention-13",
  "level": "2",
  "url": "sec-set-basics.html#convention-13",
  "type": "Convention",
  "number": "3.3",
  "title": "Set Builder Notation.",
  "body": "Set Builder Notation   "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-set-basics.html#def-subset",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": "  Let and be sets. The set is a subset of the set , denoted , if implies . If is not a subset of , we write .   "
},
{
  "id": "insight-4",
  "level": "2",
  "url": "sec-set-basics.html#insight-4",
  "type": "Structure",
  "number": "3.5",
  "title": "Subset Proof.",
  "body": "Subset Proof  There is a standard strategy for proving a statement of the form “ ,” which is to take an arbitrary element , and then to use the definitions of and to deduce that . Such a proof typically has the following form.  Proof. Let . ... (argumentation) ... Then . Hence .  "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-set-basics.html#remark-16",
  "type": "Remark",
  "number": "3.6",
  "title": "",
  "body": " It is important to distinguish between the notion of an object being an element of a set, and the notion of a set being a subset of another set. For example, let . Then and are true, whereas the statements “ ” and “ ” are false. Also, observe that a set can be an element of another set. Let . Observe that is not the same as the set . Then and are true, but “ ” and “ ” are false.  "
},
{
  "id": "thm-properties-of-subsets",
  "level": "2",
  "url": "sec-set-basics.html#thm-properties-of-subsets",
  "type": "Theorem",
  "number": "3.7",
  "title": "",
  "body": "               If and , then .          To show that , we start by choosing an arbitrary element , where we think of this “ ” as the one on the left-hand side of the expression “ .” It then follows that , where we now think of this “ ” as the one on the right-hand side of the expression “ .” Hence , using the definition of subsets.    We give two proofs, because both are instructive. First, we have a direct proof. To show that , we need to show that if , then . Because is always false, then the logical implication “if , then ” is always true, using the precise definition of the conditional given in Section 1.2.  Next, we have a proof by contradiction. Suppose that . Then there exists some such that . This statement cannot be true, however, because there is no such that . We have therefore reached a contradiction, and hence the desired result is true.  This proof by contradiction might not appear to fit the standard outline for such proofs as described in Section 2.3, because it does not appear as if we are viewing the statement being proved as having the form . In fact, there are two ways of viewing the statement being proved as having this form. For the direct proof given above, we viewed the statement being proved as . We then chose an arbitrary set , and proved the statement . For the proof by contradiction, we viewed the statement being proved as “if is a set, then ,” and then indeed used our standard method of doing proof by contradiction.    This proof, having no logical tricks, is extremely typical. Let . Because , it follows that . Because , it follows that . Therefore we see that implies , and hence .      "
},
{
  "id": "def-set-equality",
  "level": "2",
  "url": "sec-set-basics.html#def-set-equality",
  "type": "Definition",
  "number": "3.8",
  "title": "",
  "body": "  Let and be sets. The set  equals the set , denoted , if and . The set is a proper subset of the set , denoted , if and .   "
},
{
  "id": "convention-14",
  "level": "2",
  "url": "sec-set-basics.html#convention-14",
  "type": "Convention",
  "number": "3.9",
  "title": "",
  "body": " There is a bit of variation in the mathematical literature for the notation used for proper subsets. Some texts use to mean is a proper subset of , whereas others use the notation to mean what we write as .  "
},
{
  "id": "insight-5",
  "level": "2",
  "url": "sec-set-basics.html#insight-5",
  "type": "Structure",
  "number": "3.10",
  "title": "",
  "body": " Proof. Let . ... (argumentation) ... Then . Therefore . Next, Let . ... (argumentation) ... Then . Hence . We conclude that .  "
},
{
  "id": "lemma-1",
  "level": "2",
  "url": "sec-set-basics.html#lemma-1",
  "type": "Lemma",
  "number": "3.11",
  "title": "",
  "body": "  Let and be sets.    .    If then .    If and , then .       All three parts of this lemma follow straightforwardly from the definition of equality of sets together with Lemma 3.2.4. Details are left to the reader.   "
},
{
  "id": "def-power-set",
  "level": "2",
  "url": "sec-set-basics.html#def-power-set",
  "type": "Definition",
  "number": "3.12",
  "title": "",
  "body": "  Let be a set. The power set of , denoted , is the set defined by .   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-set-basics.html#example-25",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": "    Because , then . In particular, we see that .    Let . Then the subsets of are . The last of these subsets is not proper, but we need all subsets, not only the proper ones. Therefore It can be seen intuitively that if is a finite set with n elements, then is a finite set with elements; by Part (1) of this exercise we see that this formula holds even when . This formula is proved in Theorem 7.7.10 (1).     "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-set-basics.html#exercise-4",
  "type": "Exploration",
  "number": "3.14",
  "title": "",
  "body": " Let and be sets. Prove that it is not possible that and are both true.  "
},
{
  "id": "sec-set-operations",
  "level": "1",
  "url": "sec-set-operations.html",
  "type": "Section",
  "number": "3.2",
  "title": "Set Operations",
  "body": "Set Operations    Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by .      Let , and be sets.    and . If is a set such that and , then .     and . If is a set such that and , then .   Commutative Laws   and .   Associative Laws   and .   Distributive Laws   and .   Identity Laws   and .   Idempotent Laws   and .   Absorbtion Laws   and .    If , then and .         Let and be sets. The sets and are disjoint if .     Let be the set of even integers, let be the set of odd integers and let be the set of prime numbers. Then and are disjoint, whereas and are not disjoint (because ).     Let and be sets. The set difference (also called the difference ) of and , denoted , is the set defined by .     Some books use the notation instead of . Though the notation may seem intuitive, there are situations where it can become misleading or confusing.     Let , and be sets.    .     .     if and only if .     if and only if .    If , then .    If , then .     and (DeMorgan's Laws).         Let and be sets. The product (also called the Cartesian product ) of and , denoted , is the set , where denotes an ordered pair.     We can think of , which is defined in terms of ordered pairs of real numbers, as . Similarly, we think of as      Let , , and be sets.   If and , then .     and (Distributive Laws).     and (Distributive Laws).     and .     .        Observe that is not the same as , unless and happen to be equal.    Let and be sets. Prove that     Let , and be sets. Suppose that , and that . Prove that .    For real numbers , and , we know that . Let , and be sets.   Suppose that . Prove that .    Does hold for all sets , and ? Prove or give a counterexample for this formula. If the formula is false, find and prove a modification of this formula that holds for all sets.      "
},
{
  "id": "def-union-intersection",
  "level": "2",
  "url": "sec-set-operations.html#def-union-intersection",
  "type": "Definition",
  "number": "3.15",
  "title": "",
  "body": "  Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by .   "
},
{
  "id": "thm-properties-union-intersection",
  "level": "2",
  "url": "sec-set-operations.html#thm-properties-union-intersection",
  "type": "Theorem",
  "number": "3.16",
  "title": "",
  "body": "  Let , and be sets.    and . If is a set such that and , then .     and . If is a set such that and , then .   Commutative Laws   and .   Associative Laws   and .   Distributive Laws   and .   Identity Laws   and .   Idempotent Laws   and .   Absorbtion Laws   and .    If , then and .      "
},
{
  "id": "def-disjoint",
  "level": "2",
  "url": "sec-set-operations.html#def-disjoint",
  "type": "Definition",
  "number": "3.17",
  "title": "",
  "body": "  Let and be sets. The sets and are disjoint if .   "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-set-operations.html#example-26",
  "type": "Example",
  "number": "3.18",
  "title": "",
  "body": " Let be the set of even integers, let be the set of odd integers and let be the set of prime numbers. Then and are disjoint, whereas and are not disjoint (because ).  "
},
{
  "id": "def-set-difference",
  "level": "2",
  "url": "sec-set-operations.html#def-set-difference",
  "type": "Definition",
  "number": "3.19",
  "title": "",
  "body": "  Let and be sets. The set difference (also called the difference ) of and , denoted , is the set defined by .   "
},
{
  "id": "convention-15",
  "level": "2",
  "url": "sec-set-operations.html#convention-15",
  "type": "Convention",
  "number": "3.20",
  "title": "",
  "body": " Some books use the notation instead of . Though the notation may seem intuitive, there are situations where it can become misleading or confusing.  "
},
{
  "id": "thm-properties-of-set-difference",
  "level": "2",
  "url": "sec-set-operations.html#thm-properties-of-set-difference",
  "type": "Theorem",
  "number": "3.21",
  "title": "",
  "body": "  Let , and be sets.    .     .     if and only if .     if and only if .    If , then .    If , then .     and (DeMorgan's Laws).      "
},
{
  "id": "def-cartesian-product",
  "level": "2",
  "url": "sec-set-operations.html#def-cartesian-product",
  "type": "Definition",
  "number": "3.22",
  "title": "",
  "body": "  Let and be sets. The product (also called the Cartesian product ) of and , denoted , is the set , where denotes an ordered pair.   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-set-operations.html#example-27",
  "type": "Example",
  "number": "3.23",
  "title": "",
  "body": " We can think of , which is defined in terms of ordered pairs of real numbers, as . Similarly, we think of as   "
},
{
  "id": "thm-properties-of-products",
  "level": "2",
  "url": "sec-set-operations.html#thm-properties-of-products",
  "type": "Theorem",
  "number": "3.24",
  "title": "",
  "body": "  Let , , and be sets.   If and , then .     and (Distributive Laws).     and (Distributive Laws).     and .     .      "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-set-operations.html#remark-17",
  "type": "Remark",
  "number": "3.25",
  "title": "",
  "body": " Observe that is not the same as , unless and happen to be equal.  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-set-operations.html#exercise-5",
  "type": "Exploration",
  "number": "3.26",
  "title": "",
  "body": " Let and be sets. Prove that   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-set-operations.html#exercise-6",
  "type": "Exploration",
  "number": "3.27",
  "title": "",
  "body": " Let , and be sets. Suppose that , and that . Prove that .  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-set-operations.html#exercise-7",
  "type": "Exploration",
  "number": "3.28",
  "title": "",
  "body": " For real numbers , and , we know that . Let , and be sets.   Suppose that . Prove that .    Does hold for all sets , and ? Prove or give a counterexample for this formula. If the formula is false, find and prove a modification of this formula that holds for all sets.     "
},
{
  "id": "sec-families-of-sets",
  "level": "1",
  "url": "sec-families-of-sets.html",
  "type": "Section",
  "number": "3.3",
  "title": "Families of Sets",
  "body": "Families of Sets    Let be a set. The set is called a family of sets if all the elements of A are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one .     Convention for vs. for indexing sets.     Let be a family of sets. The union of the sets in , denoted , is defined as follows. If , then if , then . The intersection of the sets in , denoted , is defined as follows. If , then if , then is not defined. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.    Intuitively, the set is the set that contains everything that is in at least one of the sets ; the set is the set containing everything that is in all of the sets . The same holds for the non-indexed notation.    Let be a non-empty set, let be a family of sets indexed by and let be a set.    for all . If for all , then .     for all . If for all , then .   Distributive Law   .   Distributive Law   .   De Morgan's Law   .   De Morgan's Law   .       "
},
{
  "id": "def-family-of-sets",
  "level": "2",
  "url": "sec-families-of-sets.html#def-family-of-sets",
  "type": "Definition",
  "number": "3.29",
  "title": "",
  "body": "  Let be a set. The set is called a family of sets if all the elements of A are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one .   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-families-of-sets.html#remark-18",
  "type": "Remark",
  "number": "3.30",
  "title": "",
  "body": " Convention for vs. for indexing sets.  "
},
{
  "id": "def-union-intersection-2",
  "level": "2",
  "url": "sec-families-of-sets.html#def-union-intersection-2",
  "type": "Definition",
  "number": "3.31",
  "title": "",
  "body": "  Let be a family of sets. The union of the sets in , denoted , is defined as follows. If , then if , then . The intersection of the sets in , denoted , is defined as follows. If , then if , then is not defined. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.   "
},
{
  "id": "thm-properties-of-families",
  "level": "2",
  "url": "sec-families-of-sets.html#thm-properties-of-families",
  "type": "Theorem",
  "number": "3.32",
  "title": "",
  "body": "  Let be a non-empty set, let be a family of sets indexed by and let be a set.    for all . If for all , then .     for all . If for all , then .   Distributive Law   .   Distributive Law   .   De Morgan's Law   .   De Morgan's Law   .      "
},
{
  "id": "sec-function-basics",
  "level": "1",
  "url": "sec-function-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Function Basics",
  "body": "Function Basics    Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .        A constant map  is any function of the form for all , where is some fixed element.    The identity map on is the function defined by for all .    The inclusion map from to is the function defined by for all     If is a function, the restriction of to , denoted , is the function defined by for all .    If is a function, an extension of to is any function such that .    The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly.    Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by        Let , be subsets. Prove that if and only if .   Observe that “ ” is a statement of equality of functions, whereas “ ” is a statement of equality of sets.    Let and be sets. A partial function from to is a function of the form , where . We can think of partial functions from to as subsets of that satisfy a certain condition. Let and be partial functions from to . Prove that if and only if and .   "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-function-basics.html#def-function",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .   "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-function-basics.html#example-28",
  "type": "Example",
  "number": "4.2",
  "title": "",
  "body": "    A constant map  is any function of the form for all , where is some fixed element.    The identity map on is the function defined by for all .    The inclusion map from to is the function defined by for all     If is a function, the restriction of to , denoted , is the function defined by for all .    If is a function, an extension of to is any function such that .    The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly.    Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by      "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-function-basics.html#exercise-8",
  "type": "Exploration",
  "number": "4.3",
  "title": "",
  "body": " Let , be subsets. Prove that if and only if .   Observe that “ ” is a statement of equality of functions, whereas “ ” is a statement of equality of sets.  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-function-basics.html#exercise-9",
  "type": "Exploration",
  "number": "4.4",
  "title": "",
  "body": " Let and be sets. A partial function from to is a function of the form , where . We can think of partial functions from to as subsets of that satisfy a certain condition. Let and be partial functions from to . Prove that if and only if and .  "
},
{
  "id": "sec-image-and-pre-image",
  "level": "1",
  "url": "sec-image-and-pre-image.html",
  "type": "Section",
  "number": "4.2",
  "title": "Image and Preimage",
  "body": "Image and Preimage    Let . The image of under , denoted , is the set defined by The range of (also called the image of ) is the set .      Let . The inverse image of under , denoted , is the set defined by       Let and be sets, let and be subsets, and let be a function. Let and be non-empty sets, let be a family of subsets of indexed by , and let be a family of subsets of indexed by .    and .     .     if and only if .    If , then .    If , then .     .     .     .     .        Let and be sets, let be subsets and let be a function.   Prove that .    Is it necessarily the case that ? Give a proof or a counterexample.      "
},
{
  "id": "def-image",
  "level": "2",
  "url": "sec-image-and-pre-image.html#def-image",
  "type": "Definition",
  "number": "4.5",
  "title": "",
  "body": "  Let . The image of under , denoted , is the set defined by The range of (also called the image of ) is the set .   "
},
{
  "id": "def-preimage",
  "level": "2",
  "url": "sec-image-and-pre-image.html#def-preimage",
  "type": "Definition",
  "number": "4.6",
  "title": "",
  "body": "  Let . The inverse image of under , denoted , is the set defined by    "
},
{
  "id": "thm-properties-of-image-preimage",
  "level": "2",
  "url": "sec-image-and-pre-image.html#thm-properties-of-image-preimage",
  "type": "Theorem",
  "number": "4.7",
  "title": "",
  "body": "  Let and be sets, let and be subsets, and let be a function. Let and be non-empty sets, let be a family of subsets of indexed by , and let be a family of subsets of indexed by .    and .     .     if and only if .    If , then .    If , then .     .     .     .     .      "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-image-and-pre-image.html#exercise-10",
  "type": "Exploration",
  "number": "4.8",
  "title": "",
  "body": " Let and be sets, let be subsets and let be a function.   Prove that .    Is it necessarily the case that ? Give a proof or a counterexample.     "
},
{
  "id": "sec-composition-and-inverse-functions",
  "level": "1",
  "url": "sec-composition-and-inverse-functions.html",
  "type": "Section",
  "number": "4.3",
  "title": "Composition and Inverse Functions",
  "body": "Composition and Inverse Functions    Let , and be sets, and let and be functions. The composition of and is the function defined by for all .      Let and be sets, and let and and be functions.    (Associative Law).     (Identity Law).         Let and be sets, and let and g : be functions.   The function is a right inverse for if .    The function is a left inverse for if .    The function is an inverse for if it is both a right inverse and a left inverse.         Let and be sets, and let be a function.   If has an inverse, then the inverse is unique.    If has a right inverse and a left inverse , then , and hence has an inverse.    If is an inverse of , then is an inverse of .        Let and be sets, and let be a function. If has an inverse, the inverse is denoted .    Let and be sets, let and be subsets, and let and be functions. Prove that .   "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#def-composition",
  "type": "Definition",
  "number": "4.9",
  "title": "",
  "body": "  Let , and be sets, and let and be functions. The composition of and is the function defined by for all .   "
},
{
  "id": "thm-properties-of-composition",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#thm-properties-of-composition",
  "type": "Theorem",
  "number": "4.10",
  "title": "",
  "body": "  Let and be sets, and let and and be functions.    (Associative Law).     (Identity Law).      "
},
{
  "id": "def-left-right-inverse",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#def-left-right-inverse",
  "type": "Definition",
  "number": "4.11",
  "title": "",
  "body": "  Let and be sets, and let and g : be functions.   The function is a right inverse for if .    The function is a left inverse for if .    The function is an inverse for if it is both a right inverse and a left inverse.      "
},
{
  "id": "thm-inverse-properties",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#thm-inverse-properties",
  "type": "Theorem",
  "number": "4.12",
  "title": "",
  "body": "  Let and be sets, and let be a function.   If has an inverse, then the inverse is unique.    If has a right inverse and a left inverse , then , and hence has an inverse.    If is an inverse of , then is an inverse of .      "
},
{
  "id": "convention-16",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#convention-16",
  "type": "Convention",
  "number": "4.13",
  "title": "",
  "body": " Let and be sets, and let be a function. If has an inverse, the inverse is denoted .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-composition-and-inverse-functions.html#exercise-11",
  "type": "Exploration",
  "number": "4.14",
  "title": "",
  "body": " Let and be sets, let and be subsets, and let and be functions. Prove that .  "
},
{
  "id": "sec-inject-surject-biject",
  "level": "1",
  "url": "sec-inject-surject-biject.html",
  "type": "Section",
  "number": "4.4",
  "title": "Injectivity, Surjectivity, Bijectivty",
  "body": "Injectivity, Surjectivity, Bijectivty    Let and be sets, and let be a function.   The function is injective (also called one-to-one or monic) if implies for all ; equivalently, if implies for all .    The function is surjective (also called onto or epic) if for every , there exists some such that ; equivalently, if .    The function is bijective if it is both injective and surjective.           Let be defined by for all . This function is surjective and injective, and hence bijective. First, we show that is injective. Let . Suppose that . Then . It follows that , and because and , we deduce that . Hence is injective. Second, we show that is surjective. Let . Then , and so . Hence k is surjective.    Let be defined by for all . This function is injective but not surjective. The proof of the injectivity of is the same as the proof of the injectivity of the function in Part (1) of this example. The reason that is not surjective is that for any , though is in the codomain of .    Let be defined by for all . This function is surjective but not injective. The proof of the surjectivity of is the same as the proof of the surjectivity of the function in Part (1) of this example. The reason is not injective is because even though . (Observe that instead of we could have used for any positive number , but a single instance where the definition of injectivity fails is sufficient.)    Let be defined by for all . This function is neither injective nor surjective, which is seen using the same arguments as the corresponding arguments for and in Parts (2) and (3) of this example.        Let , and be sets, and let and be functions.   If and are injective, then is injective.    If and are surjective, then is surjective.    If and are bijective, then is bijective.         Let and be non-empty sets, and let be a function.   The function has a right inverse if and only if is surjective.    The function has a left inverse if and only if is injective.    The function has an inverse if and only if is bijective.         Let and be non-empty sets, and let be a function.   The function is injective if and only if implies for all functions g for all sets .    The function is surjective if and only if implies for all functions for all sets .        Let and be sets, and let be a subset   Prove that the identity map is bijective.    Prove that inclusion map is injective.    Let be a function. Suppose that is injective. Is the restriction necessarily injective? Give a proof or a counterexample.    Let be a function. Suppose that is surjective. Is the restriction necessarily surjective? Give a proof or a counterexample.    Let be a function, and let be an extension of . Suppose that is injective. Is necessarily injective? Give a proof or a counterexample.    Let be a function, and let be an extension of . Suppose that is surjective. Is necessarily surjective? Give a proof or a counterexample.    Prove that the projection maps and are surjective. Are the projection maps injective?       Let , and be sets. Prove that there is a bijective function .    Let and be sets, let be subsets and let be a function. Suppose that is injective. Prove that .    Let and be sets, and let and be functions.   Suppose that is injective, and that is a left inverse of . Prove that is surjective.    Suppose that is surjective, and that is a right inverse of . Prove that is injective.    Suppose that is bijective, and that is the inverse of . Prove that is bijective.       Let , and be sets, and let and be functions.   Prove that if is injective, then is injective.    Prove that if is surjective, then is surjective.    Prove that if is bijective, then is injective, and is surjective.    Find an example of functions and such that is bijective, but is not surjective, and is not injective. Hence Parts (1)-(3) of this exercise are the best possible results.      "
},
{
  "id": "def-jectivity",
  "level": "2",
  "url": "sec-inject-surject-biject.html#def-jectivity",
  "type": "Definition",
  "number": "4.15",
  "title": "",
  "body": "  Let and be sets, and let be a function.   The function is injective (also called one-to-one or monic) if implies for all ; equivalently, if implies for all .    The function is surjective (also called onto or epic) if for every , there exists some such that ; equivalently, if .    The function is bijective if it is both injective and surjective.      "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec-inject-surject-biject.html#example-29",
  "type": "Example",
  "number": "4.16",
  "title": "",
  "body": "    Let be defined by for all . This function is surjective and injective, and hence bijective. First, we show that is injective. Let . Suppose that . Then . It follows that , and because and , we deduce that . Hence is injective. Second, we show that is surjective. Let . Then , and so . Hence k is surjective.    Let be defined by for all . This function is injective but not surjective. The proof of the injectivity of is the same as the proof of the injectivity of the function in Part (1) of this example. The reason that is not surjective is that for any , though is in the codomain of .    Let be defined by for all . This function is surjective but not injective. The proof of the surjectivity of is the same as the proof of the surjectivity of the function in Part (1) of this example. The reason is not injective is because even though . (Observe that instead of we could have used for any positive number , but a single instance where the definition of injectivity fails is sufficient.)    Let be defined by for all . This function is neither injective nor surjective, which is seen using the same arguments as the corresponding arguments for and in Parts (2) and (3) of this example.     "
},
{
  "id": "lemma-2",
  "level": "2",
  "url": "sec-inject-surject-biject.html#lemma-2",
  "type": "Lemma",
  "number": "4.17",
  "title": "",
  "body": "  Let , and be sets, and let and be functions.   If and are injective, then is injective.    If and are surjective, then is surjective.    If and are bijective, then is bijective.      "
},
{
  "id": "theorem-19",
  "level": "2",
  "url": "sec-inject-surject-biject.html#theorem-19",
  "type": "Theorem",
  "number": "4.18",
  "title": "",
  "body": "  Let and be non-empty sets, and let be a function.   The function has a right inverse if and only if is surjective.    The function has a left inverse if and only if is injective.    The function has an inverse if and only if is bijective.      "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "sec-inject-surject-biject.html#theorem-20",
  "type": "Theorem",
  "number": "4.19",
  "title": "",
  "body": "  Let and be non-empty sets, and let be a function.   The function is injective if and only if implies for all functions g for all sets .    The function is surjective if and only if implies for all functions for all sets .      "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-inject-surject-biject.html#exercise-12",
  "type": "Exploration",
  "number": "4.20",
  "title": "",
  "body": " Let and be sets, and let be a subset   Prove that the identity map is bijective.    Prove that inclusion map is injective.    Let be a function. Suppose that is injective. Is the restriction necessarily injective? Give a proof or a counterexample.    Let be a function. Suppose that is surjective. Is the restriction necessarily surjective? Give a proof or a counterexample.    Let be a function, and let be an extension of . Suppose that is injective. Is necessarily injective? Give a proof or a counterexample.    Let be a function, and let be an extension of . Suppose that is surjective. Is necessarily surjective? Give a proof or a counterexample.    Prove that the projection maps and are surjective. Are the projection maps injective?     "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-inject-surject-biject.html#exercise-13",
  "type": "Exploration",
  "number": "4.21",
  "title": "",
  "body": " Let , and be sets. Prove that there is a bijective function .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-inject-surject-biject.html#exercise-14",
  "type": "Exploration",
  "number": "4.22",
  "title": "",
  "body": " Let and be sets, let be subsets and let be a function. Suppose that is injective. Prove that .  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-inject-surject-biject.html#exercise-15",
  "type": "Exploration",
  "number": "4.23",
  "title": "",
  "body": " Let and be sets, and let and be functions.   Suppose that is injective, and that is a left inverse of . Prove that is surjective.    Suppose that is surjective, and that is a right inverse of . Prove that is injective.    Suppose that is bijective, and that is the inverse of . Prove that is bijective.     "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-inject-surject-biject.html#exercise-16",
  "type": "Exploration",
  "number": "4.24",
  "title": "",
  "body": " Let , and be sets, and let and be functions.   Prove that if is injective, then is injective.    Prove that if is surjective, then is surjective.    Prove that if is bijective, then is injective, and is surjective.    Find an example of functions and such that is bijective, but is not surjective, and is not injective. Hence Parts (1)-(3) of this exercise are the best possible results.     "
},
{
  "id": "sec-relation-basics",
  "level": "1",
  "url": "sec-relation-basics.html",
  "type": "Section",
  "number": "5.1",
  "title": "Relation Basics",
  "body": "Relation Basics    Let and be sets. A relation from to is a subset . If and , we write if , and if . A relation on is a relation from to .        Let be the set of all people. Define a relation on by having person related to person if and only if and have at least one parent in common.    The symbols < and both represent relations on .    Let be a set. The symbol “ ” represents a relation on , where , are related if and only if .        Let be a function. Then is defined by a subset of satisfying a certain condition. Hence is also a relation from to .    The concept of a relation is therefore seen to be more general than the concept of a function.   In principle, it would have been logical to have the chapter on relations before the chapter on functions, and to view functions as a special case of relations. In practice, however, most mathematicians do not think of functions as special types of relations when they use functions on a daily basis, and therefore functions deserve their own treatment independent of the study of relations.     Let and be non-empty sets, let be a relation from to , and let . The relation class of with respect to , denoted , is the set defined by . If the relation is understood from the context, we will often write instead of .        There are a number of distinct cases here, and we will examine a few of them. If is the only child of each of her parents, then , where we observe that has the same parents as herself. If and are the only two children of each of their parents, then . If has one half-sibling by her father, and another half-sibling by her mother, and each of and has no other siblings or half-siblings, then , and , and .    For the relation <, we see that for all , and for the relation , we see that for all .      "
},
{
  "id": "def-relation",
  "level": "2",
  "url": "sec-relation-basics.html#def-relation",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  Let and be sets. A relation from to is a subset . If and , we write if , and if . A relation on is a relation from to .   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-relation-basics.html#example-30",
  "type": "Example",
  "number": "5.2",
  "title": "",
  "body": "    Let be the set of all people. Define a relation on by having person related to person if and only if and have at least one parent in common.    The symbols < and both represent relations on .    Let be a set. The symbol “ ” represents a relation on , where , are related if and only if .     "
},
{
  "id": "prop-functions-are-relations",
  "level": "2",
  "url": "sec-relation-basics.html#prop-functions-are-relations",
  "type": "Proposition",
  "number": "5.3",
  "title": "",
  "body": "  Let be a function. Then is defined by a subset of satisfying a certain condition. Hence is also a relation from to .   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-relation-basics.html#remark-19",
  "type": "Remark",
  "number": "5.4",
  "title": "",
  "body": " In principle, it would have been logical to have the chapter on relations before the chapter on functions, and to view functions as a special case of relations. In practice, however, most mathematicians do not think of functions as special types of relations when they use functions on a daily basis, and therefore functions deserve their own treatment independent of the study of relations.  "
},
{
  "id": "def-relation-class",
  "level": "2",
  "url": "sec-relation-basics.html#def-relation-class",
  "type": "Definition",
  "number": "5.5",
  "title": "",
  "body": "  Let and be non-empty sets, let be a relation from to , and let . The relation class of with respect to , denoted , is the set defined by . If the relation is understood from the context, we will often write instead of .   "
},
{
  "id": "example-31",
  "level": "2",
  "url": "sec-relation-basics.html#example-31",
  "type": "Example",
  "number": "5.6",
  "title": "",
  "body": "    There are a number of distinct cases here, and we will examine a few of them. If is the only child of each of her parents, then , where we observe that has the same parents as herself. If and are the only two children of each of their parents, then . If has one half-sibling by her father, and another half-sibling by her mother, and each of and has no other siblings or half-siblings, then , and , and .    For the relation <, we see that for all , and for the relation , we see that for all .     "
},
{
  "id": "sec-congruence",
  "level": "1",
  "url": "sec-congruence.html",
  "type": "Section",
  "number": "5.2",
  "title": "Congruence",
  "body": "Congruence    Let , and let . The number is congruent to the number modulo , denoted , if for some .     We see that , because ; and , because ; and , because and is not a multiple of .     Let , and let .    .    If then .    If and , then .          Observe that .    Suppose that . Then for some . Hence . Because , it follows that .    Suppose that and . Then and for some . Adding these two equations we obtain . Because , it follows that .         Let , and let . Then there is a unique such that .    To prove uniqueness, suppose that there are such that and . It follows from Lemma 5.2.3 (2) that , and from Lemma 5.2.3 (3) that . That is, we have for some . On the other hand, because , it follows that . We deduce that , and hence that . To prove existence, we use the Division Algorithm (Theorem A.5) to deduce that there are such that and . Hence , and therefore .      Let , and let . Then precisely one of the following holds: either for some , or for some , or for some , \\dots, or for some .      Let . Then is even or odd, but not both.      Let .   Let . If , then . If , then [ .     .          Suppose that . Let . Then by the definition of relation classes we know that . By Lemma 5.2.3 (2) it follows that , and hence by Lemma 5.2.3 (3) we deduce that . Therefore , and hence . A similar argument shows that . We conclude that .  Now assume that . We use proof by contradiction. Suppose that . Hence there is some . Then and , so that and . By Lemma 5.2.3 (2) we see that , and by Lemma 5.2.3 (3) it follows that , which is a contradiction. We conclude that .    By definition for all , and therefore [ . Let . By Theorem 5.2.4 there is a unique such that . It follows from Lemma 5.2.3 (2) that . Hence . Because , it follows that . Therefore . We conclude that .         Let . The set of integers modulo , denoted , is the set defined by , where the relation classes are for congruence modulo .     The set is also denoted in some texts, for reasons that will become apparent if the reader learns about group theory.   Like Clockwork  The integers modulo is the set . This set has elements, each of which is itself a set (namely, a relation class), but which is viewed here as a single element in the set . The relation classes in could each be described differently. For example, we see that , and so , which is what we see on the face of a clock. For mathematical purposes it is more convenient to write rather than , and so we will continue to write as we did originally; it would also be nice to have the on clocks replaced with , but historical practice holds sway over mathematics in this situation. There are, of course, many other ways to rewrite the elements of , for example , and so it would in principle be possible to replace the number on a clock with , though presumably only mathematicians would find that amusing.     Let . Let and be the binary operations on defined by and for all .      Let , and let . Suppose that and . Then and .    There exist such that . Then and , and therefore a + b = (c + kn) + (d + jn) = c + d + (k + j)n, ab = (c + kn)(d + jn) = cd + (c j + dk + k jn)n. The desired result now follows.      Let , and let . Suppose that and . Then and .      Let . The canonical map for congruence modulo is the function defined by for all .     Observe that there is a distinct function for each , but to avoid unnecessarily cumbersome notation (such as ), we will assume that the number is always known from the context.    The canonical map is a special case of a more general type of canonical map that will be seen in Definition 5.3.8.    Let , and let . Then and .   "
},
{
  "id": "def-congruent",
  "level": "2",
  "url": "sec-congruence.html#def-congruent",
  "type": "Definition",
  "number": "5.7",
  "title": "",
  "body": "  Let , and let . The number is congruent to the number modulo , denoted , if for some .   "
},
{
  "id": "example-32",
  "level": "2",
  "url": "sec-congruence.html#example-32",
  "type": "Example",
  "number": "5.8",
  "title": "",
  "body": " We see that , because ; and , because ; and , because and is not a multiple of .  "
},
{
  "id": "lem-modular-equivalence",
  "level": "2",
  "url": "sec-congruence.html#lem-modular-equivalence",
  "type": "Lemma",
  "number": "5.9",
  "title": "",
  "body": "  Let , and let .    .    If then .    If and , then .          Observe that .    Suppose that . Then for some . Hence . Because , it follows that .    Suppose that and . Then and for some . Adding these two equations we obtain . Because , it follows that .      "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "sec-congruence.html#theorem-21",
  "type": "Theorem",
  "number": "5.10",
  "title": "",
  "body": "  Let , and let . Then there is a unique such that .    To prove uniqueness, suppose that there are such that and . It follows from Lemma 5.2.3 (2) that , and from Lemma 5.2.3 (3) that . That is, we have for some . On the other hand, because , it follows that . We deduce that , and hence that . To prove existence, we use the Division Algorithm (Theorem A.5) to deduce that there are such that and . Hence , and therefore .   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "sec-congruence.html#corollary-1",
  "type": "Corollary",
  "number": "5.11",
  "title": "",
  "body": "  Let , and let . Then precisely one of the following holds: either for some , or for some , or for some , \\dots, or for some .   "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "sec-congruence.html#corollary-2",
  "type": "Corollary",
  "number": "5.12",
  "title": "",
  "body": "  Let . Then is even or odd, but not both.   "
},
{
  "id": "thm-modular-partition",
  "level": "2",
  "url": "sec-congruence.html#thm-modular-partition",
  "type": "Theorem",
  "number": "5.13",
  "title": "",
  "body": "  Let .   Let . If , then . If , then [ .     .          Suppose that . Let . Then by the definition of relation classes we know that . By Lemma 5.2.3 (2) it follows that , and hence by Lemma 5.2.3 (3) we deduce that . Therefore , and hence . A similar argument shows that . We conclude that .  Now assume that . We use proof by contradiction. Suppose that . Hence there is some . Then and , so that and . By Lemma 5.2.3 (2) we see that , and by Lemma 5.2.3 (3) it follows that , which is a contradiction. We conclude that .    By definition for all , and therefore [ . Let . By Theorem 5.2.4 there is a unique such that . It follows from Lemma 5.2.3 (2) that . Hence . Because , it follows that . Therefore . We conclude that .      "
},
{
  "id": "def-integers-modulo",
  "level": "2",
  "url": "sec-congruence.html#def-integers-modulo",
  "type": "Definition",
  "number": "5.14",
  "title": "",
  "body": "  Let . The set of integers modulo , denoted , is the set defined by , where the relation classes are for congruence modulo .   "
},
{
  "id": "convention-17",
  "level": "2",
  "url": "sec-congruence.html#convention-17",
  "type": "Convention",
  "number": "5.15",
  "title": "",
  "body": " The set is also denoted in some texts, for reasons that will become apparent if the reader learns about group theory.  "
},
{
  "id": "example-33",
  "level": "2",
  "url": "sec-congruence.html#example-33",
  "type": "Example",
  "number": "5.16",
  "title": "Like Clockwork.",
  "body": "Like Clockwork  The integers modulo is the set . This set has elements, each of which is itself a set (namely, a relation class), but which is viewed here as a single element in the set . The relation classes in could each be described differently. For example, we see that , and so , which is what we see on the face of a clock. For mathematical purposes it is more convenient to write rather than , and so we will continue to write as we did originally; it would also be nice to have the on clocks replaced with , but historical practice holds sway over mathematics in this situation. There are, of course, many other ways to rewrite the elements of , for example , and so it would in principle be possible to replace the number on a clock with , though presumably only mathematicians would find that amusing.  "
},
{
  "id": "def-modular-arithmetic",
  "level": "2",
  "url": "sec-congruence.html#def-modular-arithmetic",
  "type": "Definition",
  "number": "5.17",
  "title": "",
  "body": "  Let . Let and be the binary operations on defined by and for all .   "
},
{
  "id": "lemma-4",
  "level": "2",
  "url": "sec-congruence.html#lemma-4",
  "type": "Lemma",
  "number": "5.18",
  "title": "",
  "body": "  Let , and let . Suppose that and . Then and .    There exist such that . Then and , and therefore a + b = (c + kn) + (d + jn) = c + d + (k + j)n, ab = (c + kn)(d + jn) = cd + (c j + dk + k jn)n. The desired result now follows.   "
},
{
  "id": "theorem-23",
  "level": "2",
  "url": "sec-congruence.html#theorem-23",
  "type": "Theorem",
  "number": "5.19",
  "title": "",
  "body": "  Let , and let . Suppose that and . Then and .   "
},
{
  "id": "def-canonical-congruence-map",
  "level": "2",
  "url": "sec-congruence.html#def-canonical-congruence-map",
  "type": "Definition",
  "number": "5.20",
  "title": "",
  "body": "  Let . The canonical map for congruence modulo is the function defined by for all .   "
},
{
  "id": "convention-18",
  "level": "2",
  "url": "sec-congruence.html#convention-18",
  "type": "Convention",
  "number": "5.21",
  "title": "",
  "body": " Observe that there is a distinct function for each , but to avoid unnecessarily cumbersome notation (such as ), we will assume that the number is always known from the context.  "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-congruence.html#remark-20",
  "type": "Remark",
  "number": "5.22",
  "title": "",
  "body": " The canonical map is a special case of a more general type of canonical map that will be seen in Definition 5.3.8.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-congruence.html#exercise-17",
  "type": "Exploration",
  "number": "5.23",
  "title": "",
  "body": " Let , and let . Then and .  "
},
{
  "id": "sec-equivalence-relations",
  "level": "1",
  "url": "sec-equivalence-relations.html",
  "type": "Section",
  "number": "5.3",
  "title": "Equivalence Relations",
  "body": "Equivalence Relations    Let be a non-empty set, and let be a relation on .   The relation is reflexive if , for all .    The relation is symmetric if implies , for all .    The relation is transitive if and imply , for all .           The relation on is reflexive and transitive, but not symmetric.    The relation of one person being the cousin of another is symmetric, but neither reflexive nor transitive.    The relation of one person being the daughter of another person is neither reflexive, symmetric nor transitive.        Let be a set, and let be a relation on . The relation is an equivalence relation if it is reflexive, symmetric and transitive.     We use for equivalence relations.       Equality    Being the same age        Congruence module for any is an equivalene relation on .      Let be a non-empty set, and let be an equivalence relation on . The relation classes of with respect to are called equivalence classes.      Let be a non-empty set, and let be an equivalence relation on . The quotient set of with respect to , denoted , is the set defined by .      Let be a non-empty set, and let be an equivalence relation on . The canonical map for and is the function defined by for all .      Let be a non-empty set. A partition of is a family of non-empty subsets of such that   if and , then ;     .           Let denote the set of even integers, and let denote the set of odd integers. Then is a partition of .    Let . Then is a partition of .    Let . Then is not a partition of , because it is not pairwise disjoint. For example, we observe that .        Let be a non-empty set, and let be an equivalence relation on . Then is a partition of .      Let be a non-empty set, let be an equivalence relation on and let . Then if and only if .    psi and phi stuff to come  "
},
{
  "id": "def-r-s-t",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-r-s-t",
  "type": "Definition",
  "number": "5.24",
  "title": "",
  "body": "  Let be a non-empty set, and let be a relation on .   The relation is reflexive if , for all .    The relation is symmetric if implies , for all .    The relation is transitive if and imply , for all .      "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-equivalence-relations.html#example-34",
  "type": "Example",
  "number": "5.25",
  "title": "",
  "body": "    The relation on is reflexive and transitive, but not symmetric.    The relation of one person being the cousin of another is symmetric, but neither reflexive nor transitive.    The relation of one person being the daughter of another person is neither reflexive, symmetric nor transitive.     "
},
{
  "id": "def-equivalence-relation",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-equivalence-relation",
  "type": "Definition",
  "number": "5.26",
  "title": "",
  "body": "  Let be a set, and let be a relation on . The relation is an equivalence relation if it is reflexive, symmetric and transitive.   "
},
{
  "id": "convention-19",
  "level": "2",
  "url": "sec-equivalence-relations.html#convention-19",
  "type": "Convention",
  "number": "5.27",
  "title": "",
  "body": " We use for equivalence relations.  "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-equivalence-relations.html#example-35",
  "type": "Example",
  "number": "5.28",
  "title": "",
  "body": "    Equality    Being the same age     "
},
{
  "id": "cor-congruence-equivalence-relation",
  "level": "2",
  "url": "sec-equivalence-relations.html#cor-congruence-equivalence-relation",
  "type": "Corollary",
  "number": "5.29",
  "title": "",
  "body": "  Congruence module for any is an equivalene relation on .   "
},
{
  "id": "def-equivalence-class",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-equivalence-class",
  "type": "Definition",
  "number": "5.30",
  "title": "",
  "body": "  Let be a non-empty set, and let be an equivalence relation on . The relation classes of with respect to are called equivalence classes.   "
},
{
  "id": "def-quotient-set",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-quotient-set",
  "type": "Definition",
  "number": "5.31",
  "title": "",
  "body": "  Let be a non-empty set, and let be an equivalence relation on . The quotient set of with respect to , denoted , is the set defined by .   "
},
{
  "id": "def-canonical-map",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-canonical-map",
  "type": "Definition",
  "number": "5.32",
  "title": "",
  "body": "  Let be a non-empty set, and let be an equivalence relation on . The canonical map for and is the function defined by for all .   "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-equivalence-relations.html#def-partition",
  "type": "Definition",
  "number": "5.33",
  "title": "",
  "body": "  Let be a non-empty set. A partition of is a family of non-empty subsets of such that   if and , then ;     .      "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-equivalence-relations.html#example-36",
  "type": "Example",
  "number": "5.34",
  "title": "",
  "body": "    Let denote the set of even integers, and let denote the set of odd integers. Then is a partition of .    Let . Then is a partition of .    Let . Then is not a partition of , because it is not pairwise disjoint. For example, we observe that .     "
},
{
  "id": "thm-equivalence-partitions",
  "level": "2",
  "url": "sec-equivalence-relations.html#thm-equivalence-partitions",
  "type": "Theorem",
  "number": "5.35",
  "title": "",
  "body": "  Let be a non-empty set, and let be an equivalence relation on . Then is a partition of .   "
},
{
  "id": "corollary-4",
  "level": "2",
  "url": "sec-equivalence-relations.html#corollary-4",
  "type": "Corollary",
  "number": "5.36",
  "title": "",
  "body": "  Let be a non-empty set, let be an equivalence relation on and let . Then if and only if .   "
},
{
  "id": "sec-properties-of-n",
  "level": "1",
  "url": "sec-properties-of-n.html",
  "type": "Section",
  "number": "6.1",
  "title": "Properties of the Natural Numbers",
  "body": "Properties of the Natural Numbers   "
},
{
  "id": "sec-induction",
  "level": "1",
  "url": "sec-induction.html",
  "type": "Section",
  "number": "6.2",
  "title": "Mathematical Induction",
  "body": "Mathematical Induction    Let G \\subseteq N. Suppose that   1\\in G;    if n\\in G, then n + 1\\in G.   Then G = N.      If n\\in N, then 8n - 3n is divisible by 5.    Let G = {n\\in N | 8n - 3n is divisible by 5}. We will use PMI to show that G = N, and it will then follow that 8n - 3n is divisible by 5 for all n\\in N, which is what we need to prove. First, we observe that G \\subseteq N by definition, and hence PMI is applicable. To use PMI, we need to show two things, which are that 1\\in G, and that if n\\in G then n + 1\\in G. We start with the first of these. Observe that 8^1 - 3^1 = 5, and therefore 8^1 - 3^1 is indeed divisible by 5. Hence 1\\in G, which is Part (a) of the statement of PMI.  To show Part (b) of the statement of PMI, let n\\in G. We then need to deduce that n + 1\\in G. Because n\\in G, we know that 8n - 3n is divisible by 5, which means that there is some k\\in Z such that 8n - 3n = 5k (recall the definition of divisibility in Section 2.2). To show that n+1\\in G will require showing that 8n+1 -3n+1 is divisible by 5; we can make use of our hypothesis that 8n - 3n is divisible by 5 in this proof. We compute 8n+1 - 3n+1 = 8 · 8n - 3 · 3n = (5 · 8n + 3 · 8n) - 3 · 3n = 5 · 8n + 3 · (8n - 3n) = 5 · 8n + 3(5k) = 5(8n + 3k). Because n and k are integers, then 8n + 3k is an integer, and hence 8n+1 - 3n+1 is divisible by 5. It follows that n + 1\\in G. We have therefore proved that Part (b) of the statement of PMI holds. PMI now implies that G = N, and the result is proved.      If n\\in N, then 1 + 2 + \\cdots + n = n(n + 1) 2 .    Horse Induction  We will prove that all horses have the same color. More precisely, we will show that the statement “for any set of n horses, all the horses in the set have the same color,” is true for all n\\in N. Because there are only finitely many horses in the world, it will then follow that all existing horses have the same color. First, suppose that n = 1. It is certainly true that for any set of one horse, all the horses in the set have the same color. Next, suppose that the result is true for n, so that for any set of n horses, all the horses in the set have the same color. We need to show that the result is true for n + 1. Let {H1, \\dots, Hn+1} be a set of n + 1 horses. The set {H1, \\dots, Hn} has n horses, so by the inductive hypothesis all the horses in this set have the same color. On the other hand, the set {H2, \\dots, Hn+1} also has n horses, so all horses in this set have the same color. In particular, it then follows that Hn and Hn+1 have the same color. Combining this fact with the previous observation that horses H1, \\dots, Hn all have the same color, it follows that H1, \\dots, Hn+1 all have the same color. We have therefore proved the inductive step. Hence all horses have the same color.   Pigeonhole Principle  Let k, m\\in N, and let f : {1, \\dots, m} \\to {1, \\dots, k} be a function. Prove that if m > k, then f is not injective. A combinatorial interpretation of this fact is known as the Pigeonhole Principle, which says that if m objects are placed in k boxes, where m > k, then there will be a box with more than one object in it. Though this principle may seem innocuous, it is very important in combinatorics.   "
},
{
  "id": "thm-induction",
  "level": "2",
  "url": "sec-induction.html#thm-induction",
  "type": "Theorem",
  "number": "6.1",
  "title": "",
  "body": "  Let G \\subseteq N. Suppose that   1\\in G;    if n\\in G, then n + 1\\in G.   Then G = N.   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "sec-induction.html#proposition-2",
  "type": "Proposition",
  "number": "6.2",
  "title": "",
  "body": "  If n\\in N, then 8n - 3n is divisible by 5.    Let G = {n\\in N | 8n - 3n is divisible by 5}. We will use PMI to show that G = N, and it will then follow that 8n - 3n is divisible by 5 for all n\\in N, which is what we need to prove. First, we observe that G \\subseteq N by definition, and hence PMI is applicable. To use PMI, we need to show two things, which are that 1\\in G, and that if n\\in G then n + 1\\in G. We start with the first of these. Observe that 8^1 - 3^1 = 5, and therefore 8^1 - 3^1 is indeed divisible by 5. Hence 1\\in G, which is Part (a) of the statement of PMI.  To show Part (b) of the statement of PMI, let n\\in G. We then need to deduce that n + 1\\in G. Because n\\in G, we know that 8n - 3n is divisible by 5, which means that there is some k\\in Z such that 8n - 3n = 5k (recall the definition of divisibility in Section 2.2). To show that n+1\\in G will require showing that 8n+1 -3n+1 is divisible by 5; we can make use of our hypothesis that 8n - 3n is divisible by 5 in this proof. We compute 8n+1 - 3n+1 = 8 · 8n - 3 · 3n = (5 · 8n + 3 · 8n) - 3 · 3n = 5 · 8n + 3 · (8n - 3n) = 5 · 8n + 3(5k) = 5(8n + 3k). Because n and k are integers, then 8n + 3k is an integer, and hence 8n+1 - 3n+1 is divisible by 5. It follows that n + 1\\in G. We have therefore proved that Part (b) of the statement of PMI holds. PMI now implies that G = N, and the result is proved.   "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "sec-induction.html#proposition-3",
  "type": "Proposition",
  "number": "6.3",
  "title": "",
  "body": "  If n\\in N, then 1 + 2 + \\cdots + n = n(n + 1) 2 .   "
},
{
  "id": "warning-6",
  "level": "2",
  "url": "sec-induction.html#warning-6",
  "type": "Warning",
  "number": "6.4",
  "title": "Horse Induction.",
  "body": "Horse Induction  We will prove that all horses have the same color. More precisely, we will show that the statement “for any set of n horses, all the horses in the set have the same color,” is true for all n\\in N. Because there are only finitely many horses in the world, it will then follow that all existing horses have the same color. First, suppose that n = 1. It is certainly true that for any set of one horse, all the horses in the set have the same color. Next, suppose that the result is true for n, so that for any set of n horses, all the horses in the set have the same color. We need to show that the result is true for n + 1. Let {H1, \\dots, Hn+1} be a set of n + 1 horses. The set {H1, \\dots, Hn} has n horses, so by the inductive hypothesis all the horses in this set have the same color. On the other hand, the set {H2, \\dots, Hn+1} also has n horses, so all horses in this set have the same color. In particular, it then follows that Hn and Hn+1 have the same color. Combining this fact with the previous observation that horses H1, \\dots, Hn all have the same color, it follows that H1, \\dots, Hn+1 all have the same color. We have therefore proved the inductive step. Hence all horses have the same color.  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-induction.html#exercise-18",
  "type": "Exploration",
  "number": "6.5",
  "title": "Pigeonhole Principle.",
  "body": "Pigeonhole Principle  Let k, m\\in N, and let f : {1, \\dots, m} \\to {1, \\dots, k} be a function. Prove that if m > k, then f is not injective. A combinatorial interpretation of this fact is known as the Pigeonhole Principle, which says that if m objects are placed in k boxes, where m > k, then there will be a box with more than one object in it. Though this principle may seem innocuous, it is very important in combinatorics.  "
},
{
  "id": "sec-recursion",
  "level": "1",
  "url": "sec-recursion.html",
  "type": "Section",
  "number": "6.3",
  "title": "Recursion",
  "body": "Recursion   "
},
{
  "id": "sec-cardinality-of-sets",
  "level": "1",
  "url": "sec-cardinality-of-sets.html",
  "type": "Section",
  "number": "7.1",
  "title": "Cardinality of Sets",
  "body": "Cardinality of Sets    Let and be sets. The sets and are equinumerous, denoted (more commonly ), if there is a bijective function .     Don't like the notation.         Almost Equivalent  Lemma 6.5.2 might lead the reader to think of as an equivalence relation, but we need to proceed with caution here. If were a relation, on what set would it be a relation? We might want to think of as a relation on the set of all sets, because for any two sets and , it must be the case that either or . However, because of foundational problems such as Russell's Paradox, which was discussed in Section 3.5, we avoid things such as the set of all sets. Hence, although satisfies the three properties of an equivalence relation, it is not technically a relation on a set at all. If, however, all sets of interest are subsets of a given set , then it is correct to say that is an equivalence relation on .     Let be a set.   The set is said to be finite if it is either the empty set or for some .    The set is said to be infinite if it is not finite.    The set is said to be countably infinite if .    The set is said to be countable (also called denumerable) if it is finite or countably infinite.    The set is said to be uncountable if it is not countable.         Let and be sets. Suppose that . If is finite, infinite, countably infinite, countable or uncountable, then so is .         The set is infinite.    A countably infinite set is infinite.          Suppose that is finite. Because , then there is some such that . Let be a bijective function. It then follows from Theorem 6.3.11 (1) that there is some such that for any . Therefore for all . Hence . Because we deduce that is not surjective, which is a contradiction. Hence is not finite, and so it is infinite.    Let be a set. Suppose that is countably infinite. Then . Suppose further that is finite. It would then follow from Exercise 6.5.5 that is finite, which is a contradiction to Part (1) of this lemma. Hence is infinite.         Let be a set. Then .    There are two cases. First, suppose that . Observe that , and therefore there cannot be a bijective function , because there cannot be a function from a non-empty set to the empty set. Hence .  Next, suppose that . Suppose further that . Then there is a bijective function . Let . Observe that , and so . Because is surjective, there is some such that . Is ? Suppose that . Then by the definition of we see that . Suppose that . Then . We therefore have a contradiction, and so .      The set is uncountable.    By Theorem 6.5.7 we know that , and so is not countably infinite. If we could show that were not finite, then it would follow that it is not countable. Suppose that is finite. Let . It follows from Theorem 6.6.5 (1) that is finite. However, it is evident that , and this would imply that is finite, which is a contradiction to Lemma 6.5.5 (1). We conclude that is uncountable.      Let and be sets. We say that if there is an injective function .     Notation I like better     Let , and be sets. Then the following hold:    .     .    If and , then .         Let , and be sets. Suppose that , and that . Then .      Let and be sets. Suppose that and . Then .    By definition there are injective functions and . Then , and . By Exercise 6.5.4 we know that and . From the former it follows that , and we then use Lemma 6.5.11 to deduce that . Hence .     Let . Suppose that . We will use the Schroeder-Bernstein Theorem (Theorem 6.5.10) to prove that . By Example 6.5.3 (3) we know that and . Hence, it will suffice to prove that . Let be defined by for all , and let be defined by for all . Then both and are injective, and hence and . The Schroeder-Bernstein Theorem now implies that , and therefore .     Let and be sets. Then or .    We need to show that there is an injective function or an injective function . If or is empty these functions exist trivially, so we will assume that and are both non-empty.  A partial function from to is a function of the form , where . We can think of a partial function from to as a subset such that for each , there is at most one pair in of the form . Hence, we can apply the concepts of subset and union to partial functions from to .  Let be the set of all injective partial functions from to . Observe that , because . Let be a chain in . We claim that . Suppose that , , for some and . Then and for some partial functions . Because is a chain, we know that or . Without loss of generality assume that . Then and are both in , and because is a partial function, then it must be the case that . We conclude that is a partial function from to . Next, suppose that , for some and . A similar argument shows that must both be in some , and because is an injective partial function, then it must be the case that . We conclude that \\bigcup is an injective partial function from to , and hence that .  By Zorn's Lemma (Theorem 3.5.6) the family of sets has a maximal element. Let be such a maximal element. Then is an injective partial function from to . There are now three cases. First, suppose that for each , there is a pair of the form . Then is an injective function . Second, suppose that for each , there is a pair of the form . Then is a bijective partial function from , and using Exercise 4.4.13 (3) we see that the inverse function of can be viewed as an injective function . Third, suppose that neither of the previous two cases holds. Then there is some such that there is no pair of the form in , and there is some such that there is no pair of the form . Let . It is left to the reader to verify that is an injective partial function from to , and hence that . Because , we have a contradiction to the fact that is a maximal element of , and so this third case cannot happen.     Let and be sets, let be a subset and let be a function. Suppose that is injective. Prove that .       Give an example of sets , and such that and .    Let , and be sets. Suppose that and that and . Prove that .    Let , and be sets. Suppose that and that and . Is it necessarily the case that ? Give a proof or a counterexample.      "
},
{
  "id": "def-equinumerous",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#def-equinumerous",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": "  Let and be sets. The sets and are equinumerous, denoted (more commonly ), if there is a bijective function .   "
},
{
  "id": "convention-20",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#convention-20",
  "type": "Convention",
  "number": "7.2",
  "title": "",
  "body": " Don't like the notation.  "
},
{
  "id": "theorem-26",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#theorem-26",
  "type": "Theorem",
  "number": "7.3",
  "title": "",
  "body": "     "
},
{
  "id": "warning-7",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#warning-7",
  "type": "Warning",
  "number": "7.4",
  "title": "Almost Equivalent.",
  "body": "Almost Equivalent  Lemma 6.5.2 might lead the reader to think of as an equivalence relation, but we need to proceed with caution here. If were a relation, on what set would it be a relation? We might want to think of as a relation on the set of all sets, because for any two sets and , it must be the case that either or . However, because of foundational problems such as Russell's Paradox, which was discussed in Section 3.5, we avoid things such as the set of all sets. Hence, although satisfies the three properties of an equivalence relation, it is not technically a relation on a set at all. If, however, all sets of interest are subsets of a given set , then it is correct to say that is an equivalence relation on .  "
},
{
  "id": "def-set-sizes",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#def-set-sizes",
  "type": "Definition",
  "number": "7.5",
  "title": "",
  "body": "  Let be a set.   The set is said to be finite if it is either the empty set or for some .    The set is said to be infinite if it is not finite.    The set is said to be countably infinite if .    The set is said to be countable (also called denumerable) if it is finite or countably infinite.    The set is said to be uncountable if it is not countable.      "
},
{
  "id": "theorem-27",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#theorem-27",
  "type": "Theorem",
  "number": "7.6",
  "title": "",
  "body": "  Let and be sets. Suppose that . If is finite, infinite, countably infinite, countable or uncountable, then so is .   "
},
{
  "id": "theorem-28",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#theorem-28",
  "type": "Theorem",
  "number": "7.7",
  "title": "",
  "body": "     The set is infinite.    A countably infinite set is infinite.          Suppose that is finite. Because , then there is some such that . Let be a bijective function. It then follows from Theorem 6.3.11 (1) that there is some such that for any . Therefore for all . Hence . Because we deduce that is not surjective, which is a contradiction. Hence is not finite, and so it is infinite.    Let be a set. Suppose that is countably infinite. Then . Suppose further that is finite. It would then follow from Exercise 6.5.5 that is finite, which is a contradiction to Part (1) of this lemma. Hence is infinite.      "
},
{
  "id": "theorem-29",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#theorem-29",
  "type": "Theorem",
  "number": "7.8",
  "title": "",
  "body": "  Let be a set. Then .    There are two cases. First, suppose that . Observe that , and therefore there cannot be a bijective function , because there cannot be a function from a non-empty set to the empty set. Hence .  Next, suppose that . Suppose further that . Then there is a bijective function . Let . Observe that , and so . Because is surjective, there is some such that . Is ? Suppose that . Then by the definition of we see that . Suppose that . Then . We therefore have a contradiction, and so .   "
},
{
  "id": "cor-pn-uncountable",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#cor-pn-uncountable",
  "type": "Corollary",
  "number": "7.9",
  "title": "",
  "body": "  The set is uncountable.    By Theorem 6.5.7 we know that , and so is not countably infinite. If we could show that were not finite, then it would follow that it is not countable. Suppose that is finite. Let . It follows from Theorem 6.6.5 (1) that is finite. However, it is evident that , and this would imply that is finite, which is a contradiction to Lemma 6.5.5 (1). We conclude that is uncountable.   "
},
{
  "id": "definition-55",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#definition-55",
  "type": "Definition",
  "number": "7.10",
  "title": "",
  "body": "  Let and be sets. We say that if there is an injective function .   "
},
{
  "id": "convention-21",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#convention-21",
  "type": "Convention",
  "number": "7.11",
  "title": "",
  "body": " Notation I like better  "
},
{
  "id": "theorem-30",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#theorem-30",
  "type": "Theorem",
  "number": "7.12",
  "title": "",
  "body": "  Let , and be sets. Then the following hold:    .     .    If and , then .      "
},
{
  "id": "lem-schroder-lemma",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#lem-schroder-lemma",
  "type": "Lemma",
  "number": "7.13",
  "title": "",
  "body": "  Let , and be sets. Suppose that , and that . Then .   "
},
{
  "id": "thm-schroder-bernstein",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#thm-schroder-bernstein",
  "type": "Theorem",
  "number": "7.14",
  "title": "",
  "body": "  Let and be sets. Suppose that and . Then .    By definition there are injective functions and . Then , and . By Exercise 6.5.4 we know that and . From the former it follows that , and we then use Lemma 6.5.11 to deduce that . Hence .   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#example-37",
  "type": "Example",
  "number": "7.15",
  "title": "",
  "body": " Let . Suppose that . We will use the Schroeder-Bernstein Theorem (Theorem 6.5.10) to prove that . By Example 6.5.3 (3) we know that and . Hence, it will suffice to prove that . Let be defined by for all , and let be defined by for all . Then both and are injective, and hence and . The Schroeder-Bernstein Theorem now implies that , and therefore .  "
},
{
  "id": "thm-set-trichotomy",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#thm-set-trichotomy",
  "type": "Theorem",
  "number": "7.16",
  "title": "",
  "body": "  Let and be sets. Then or .    We need to show that there is an injective function or an injective function . If or is empty these functions exist trivially, so we will assume that and are both non-empty.  A partial function from to is a function of the form , where . We can think of a partial function from to as a subset such that for each , there is at most one pair in of the form . Hence, we can apply the concepts of subset and union to partial functions from to .  Let be the set of all injective partial functions from to . Observe that , because . Let be a chain in . We claim that . Suppose that , , for some and . Then and for some partial functions . Because is a chain, we know that or . Without loss of generality assume that . Then and are both in , and because is a partial function, then it must be the case that . We conclude that is a partial function from to . Next, suppose that , for some and . A similar argument shows that must both be in some , and because is an injective partial function, then it must be the case that . We conclude that \\bigcup is an injective partial function from to , and hence that .  By Zorn's Lemma (Theorem 3.5.6) the family of sets has a maximal element. Let be such a maximal element. Then is an injective partial function from to . There are now three cases. First, suppose that for each , there is a pair of the form . Then is an injective function . Second, suppose that for each , there is a pair of the form . Then is a bijective partial function from , and using Exercise 4.4.13 (3) we see that the inverse function of can be viewed as an injective function . Third, suppose that neither of the previous two cases holds. Then there is some such that there is no pair of the form in , and there is some such that there is no pair of the form . Let . It is left to the reader to verify that is an injective partial function from to , and hence that . Because , we have a contradiction to the fact that is a maximal element of , and so this third case cannot happen.   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#exercise-19",
  "type": "Exploration",
  "number": "7.17",
  "title": "",
  "body": " Let and be sets, let be a subset and let be a function. Suppose that is injective. Prove that .  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-cardinality-of-sets.html#exercise-20",
  "type": "Exploration",
  "number": "7.18",
  "title": "",
  "body": "    Give an example of sets , and such that and .    Let , and be sets. Suppose that and that and . Prove that .    Let , and be sets. Suppose that and that and . Is it necessarily the case that ? Give a proof or a counterexample.     "
},
{
  "id": "sec-finite-countable-sets",
  "level": "1",
  "url": "sec-finite-countable-sets.html",
  "type": "Section",
  "number": "7.2",
  "title": "Finite and Countable Sets",
  "body": "Finite and Countable Sets    Let be a set. Suppose that is finite. The cardinality of , denoted , is defined as follows. If , let . If , let , where .      Let . Then if and only if .      Let and be sets. Suppose that and are finite. Then if and only if .      Let be a set. Suppose that is finite.   If , then is finite.    If , then .    If , then .    If , then .         Let be a set. Then is infinite if and only if it contains an infinite subset.      Let be a set. Suppose that is countable. If , then is countable.    Let .  If is finite, then by Theorem 6.6.5 (1) we know that is finite, and hence it is countable. Now assume that is countably infinite. We will prove the theorem for the special case that . For the general case, we observe that if is countably infinite, then there is a bijective function , and the desired result follows from the fact that , which holds by Exercise 6.5.4, and that is a subset of .  Suppose that . If is finite, then it is countable by definition, and there is nothing to prove. Now suppose that is infinite.  By the Well-Ordering Principle (Theorem 6.2.5), there is a unique element such that for all . Let be defined as follows. Let . Then for some , which means that is a function . It follows from Exercise 6.6.3 that cannot be surjective, and hence . Using the Well-Ordering Principle again we see that there is a unique element such that for all . We then let .  We can apply Theorem 6.4.8 to and as above, and we deduce that there is a unique function such that , and that for all . Hence for all , and if , then , and so for all .  Let . Then for all , where we think of as the empty set when . Because , it follows that . By Exercise 6.3.4 we see that for all .  We now show that is bijective. Let . Suppose that . Without loss of generality assume that . Then , and also , so that . It follows that , and as observed above we know that . Therefore , and we deduce that f is injective.  Let . Suppose that for any . Using a previous observation we know that , and hence . On the other hand, we saw above that for all . By hypothesis on we know that , and it follows that , which is a contradiction. Therefore is surjective.  We conclude that is bijective, which implies that . Hence is countably infinite, and therefore countable.      Let be a non-empty set. The following are equivalent.   The set is countable.    There is an injective function .    There is a surjective function .           . Suppose that is countable. There are two cases, depending upon whether is finite or countably infinite. If is finite, there is a bijective function for some , and hence there is an injective function , because . If is countably infinite, there is a bijective function , which is injective.     . Suppose that there is an injective function . Because is injective, it follows from Exercise 6.5.4 that . By Theorem 6.6.7 we know that is countable, and therefore is countable.     . Suppose that there is an injective function . By Theorem 4.4.5 (2) the function has a left inverse, say . By Exercise 4.4.13 (1) we see that is surjective. The other implication is proved similarly, and we omit the details.         Let be a non-empty set, and let be a family of sets indexed by . Suppose that is countable for each .    is countable.    If is countable, then is countable.          Choose some . Then , and hence is countable by Theorem 6.6.7.    If for all , then , which implies that is finite, and hence countable. Now assume that for some . Because the empty set contributes nothing to a union of sets, the set will not be changed if we delete from those elements such that . Let us assume that that has been done, and therefore that for all .  There are two cases, depending upon whether is countably infinite or is finite. We prove the former case, leaving the other case to the reader in Exercise 6.6.12. Because we are assuming that is countably infinite, without loss of generality we may assume that .  Because is countable for all , then by Theorem 6.6.8 there is a surjective function for each . Let be defined as follows. Let . We can apply Exercise 6.3.14 to the function defined by for all , and we deduce that there are unique such that and . Let .  Let . Then for some . Because is surjective, there is some such that . Let . The reader can then verify that . Therefore is surjective, and it follows from Theorem 6.6.8 that is countable.        Observe that in the proof of Theorem 6.6.9 (2), we simultaneously had to choose a surjective function for each ; there really is a choice to be made, because there is more than one such function for each (except when has only one element in it). Hence, we are making use of the Axiom of Choice (Theorem 4.1.5). To use that axiom formally in this proof, we would let denote the set of all surjective functions for each , and we would apply the Axiom of Choice to the family of sets ; we omit the details. It is pointed out in [Vau95, p. 56] that any proof of Theorem 6.6.9 (2) requires the Axiom of Choice.     Let be sets for some . Suppose that are countable. Then is countable.      Let be a set. If is infinite, then has a countably infinite subset.    Suppose that is infinite. By the Trichotomy Law for Sets (Theorem 6.5.13) we know that .  First, suppose that . Then there is an injective function . By Exercise 6.5.4 we know that . Hence is a countably infinite subset of .  Second, suppose that . Then there is an injective function . By Exercise 6.5.4 again we know that . Because , it follows from Theorem 6.6.7 that is countable. Hence is countable. Because is infinite, then it must be countably infinite, and hence A has a countably infinite subset, namely, itself.      Let be a set. Then is finite if and only if has no proper subset with the same cardinality as .     Let and be sets. Suppose that and are finite. Prove that is finite.    Let be a subset. Suppose that there is some such that for all . Prove that is finite.    Let be a set. Prove that is finite if and only if there is an injective function for some if and only if there is a surjective function for some .    Let and be sets, and let be a function. Suppose that and are finite sets, and that . Prove that is bijective if and only if is injective if and only if is surjective.    Let be a set. Suppose that is finite and non-empty. Use Theorem 6.3.11 (1) to prove that there is some such that for all .    Let be a set. Suppose that is countably infinite. Prove that there is a function that is injective but not surjective.    Let be a set. Prove that is uncountable if and only if it contains an uncountable subset.    Let and be sets. Suppose that and are countable. Prove that is countable.   "
},
{
  "id": "def-cardinality",
  "level": "2",
  "url": "sec-finite-countable-sets.html#def-cardinality",
  "type": "Definition",
  "number": "7.19",
  "title": "",
  "body": "  Let be a set. Suppose that is finite. The cardinality of , denoted , is defined as follows. If , let . If , let , where .   "
},
{
  "id": "corollary-6",
  "level": "2",
  "url": "sec-finite-countable-sets.html#corollary-6",
  "type": "Corollary",
  "number": "7.20",
  "title": "",
  "body": "  Let . Then if and only if .   "
},
{
  "id": "corollary-7",
  "level": "2",
  "url": "sec-finite-countable-sets.html#corollary-7",
  "type": "Corollary",
  "number": "7.21",
  "title": "",
  "body": "  Let and be sets. Suppose that and are finite. Then if and only if .   "
},
{
  "id": "theorem-33",
  "level": "2",
  "url": "sec-finite-countable-sets.html#theorem-33",
  "type": "Theorem",
  "number": "7.22",
  "title": "",
  "body": "  Let be a set. Suppose that is finite.   If , then is finite.    If , then .    If , then .    If , then .      "
},
{
  "id": "cor-infinite-subset",
  "level": "2",
  "url": "sec-finite-countable-sets.html#cor-infinite-subset",
  "type": "Corollary",
  "number": "7.23",
  "title": "",
  "body": "  Let be a set. Then is infinite if and only if it contains an infinite subset.   "
},
{
  "id": "thm-countable-subsets",
  "level": "2",
  "url": "sec-finite-countable-sets.html#thm-countable-subsets",
  "type": "Theorem",
  "number": "7.24",
  "title": "",
  "body": "  Let be a set. Suppose that is countable. If , then is countable.    Let .  If is finite, then by Theorem 6.6.5 (1) we know that is finite, and hence it is countable. Now assume that is countably infinite. We will prove the theorem for the special case that . For the general case, we observe that if is countably infinite, then there is a bijective function , and the desired result follows from the fact that , which holds by Exercise 6.5.4, and that is a subset of .  Suppose that . If is finite, then it is countable by definition, and there is nothing to prove. Now suppose that is infinite.  By the Well-Ordering Principle (Theorem 6.2.5), there is a unique element such that for all . Let be defined as follows. Let . Then for some , which means that is a function . It follows from Exercise 6.6.3 that cannot be surjective, and hence . Using the Well-Ordering Principle again we see that there is a unique element such that for all . We then let .  We can apply Theorem 6.4.8 to and as above, and we deduce that there is a unique function such that , and that for all . Hence for all , and if , then , and so for all .  Let . Then for all , where we think of as the empty set when . Because , it follows that . By Exercise 6.3.4 we see that for all .  We now show that is bijective. Let . Suppose that . Without loss of generality assume that . Then , and also , so that . It follows that , and as observed above we know that . Therefore , and we deduce that f is injective.  Let . Suppose that for any . Using a previous observation we know that , and hence . On the other hand, we saw above that for all . By hypothesis on we know that , and it follows that , which is a contradiction. Therefore is surjective.  We conclude that is bijective, which implies that . Hence is countably infinite, and therefore countable.   "
},
{
  "id": "theorem-35",
  "level": "2",
  "url": "sec-finite-countable-sets.html#theorem-35",
  "type": "Theorem",
  "number": "7.25",
  "title": "",
  "body": "  Let be a non-empty set. The following are equivalent.   The set is countable.    There is an injective function .    There is a surjective function .           . Suppose that is countable. There are two cases, depending upon whether is finite or countably infinite. If is finite, there is a bijective function for some , and hence there is an injective function , because . If is countably infinite, there is a bijective function , which is injective.     . Suppose that there is an injective function . Because is injective, it follows from Exercise 6.5.4 that . By Theorem 6.6.7 we know that is countable, and therefore is countable.     . Suppose that there is an injective function . By Theorem 4.4.5 (2) the function has a left inverse, say . By Exercise 4.4.13 (1) we see that is surjective. The other implication is proved similarly, and we omit the details.      "
},
{
  "id": "thm-countable-unions-intersections",
  "level": "2",
  "url": "sec-finite-countable-sets.html#thm-countable-unions-intersections",
  "type": "Theorem",
  "number": "7.26",
  "title": "",
  "body": "  Let be a non-empty set, and let be a family of sets indexed by . Suppose that is countable for each .    is countable.    If is countable, then is countable.          Choose some . Then , and hence is countable by Theorem 6.6.7.    If for all , then , which implies that is finite, and hence countable. Now assume that for some . Because the empty set contributes nothing to a union of sets, the set will not be changed if we delete from those elements such that . Let us assume that that has been done, and therefore that for all .  There are two cases, depending upon whether is countably infinite or is finite. We prove the former case, leaving the other case to the reader in Exercise 6.6.12. Because we are assuming that is countably infinite, without loss of generality we may assume that .  Because is countable for all , then by Theorem 6.6.8 there is a surjective function for each . Let be defined as follows. Let . We can apply Exercise 6.3.14 to the function defined by for all , and we deduce that there are unique such that and . Let .  Let . Then for some . Because is surjective, there is some such that . Let . The reader can then verify that . Therefore is surjective, and it follows from Theorem 6.6.8 that is countable.      "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "sec-finite-countable-sets.html#remark-21",
  "type": "Remark",
  "number": "7.27",
  "title": "",
  "body": " Observe that in the proof of Theorem 6.6.9 (2), we simultaneously had to choose a surjective function for each ; there really is a choice to be made, because there is more than one such function for each (except when has only one element in it). Hence, we are making use of the Axiom of Choice (Theorem 4.1.5). To use that axiom formally in this proof, we would let denote the set of all surjective functions for each , and we would apply the Axiom of Choice to the family of sets ; we omit the details. It is pointed out in [Vau95, p. 56] that any proof of Theorem 6.6.9 (2) requires the Axiom of Choice.  "
},
{
  "id": "thm-countable-products",
  "level": "2",
  "url": "sec-finite-countable-sets.html#thm-countable-products",
  "type": "Theorem",
  "number": "7.28",
  "title": "",
  "body": "  Let be sets for some . Suppose that are countable. Then is countable.   "
},
{
  "id": "theorem-38",
  "level": "2",
  "url": "sec-finite-countable-sets.html#theorem-38",
  "type": "Theorem",
  "number": "7.29",
  "title": "",
  "body": "  Let be a set. If is infinite, then has a countably infinite subset.    Suppose that is infinite. By the Trichotomy Law for Sets (Theorem 6.5.13) we know that .  First, suppose that . Then there is an injective function . By Exercise 6.5.4 we know that . Hence is a countably infinite subset of .  Second, suppose that . Then there is an injective function . By Exercise 6.5.4 again we know that . Because , it follows from Theorem 6.6.7 that is countable. Hence is countable. Because is infinite, then it must be countably infinite, and hence A has a countably infinite subset, namely, itself.   "
},
{
  "id": "thm-finite-characterization",
  "level": "2",
  "url": "sec-finite-countable-sets.html#thm-finite-characterization",
  "type": "Theorem",
  "number": "7.30",
  "title": "",
  "body": "  Let be a set. Then is finite if and only if has no proper subset with the same cardinality as .   "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-21",
  "type": "Exploration",
  "number": "7.31",
  "title": "",
  "body": " Let and be sets. Suppose that and are finite. Prove that is finite.  "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-22",
  "type": "Exploration",
  "number": "7.32",
  "title": "",
  "body": " Let be a subset. Suppose that there is some such that for all . Prove that is finite.  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-23",
  "type": "Exploration",
  "number": "7.33",
  "title": "",
  "body": " Let be a set. Prove that is finite if and only if there is an injective function for some if and only if there is a surjective function for some .  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-24",
  "type": "Exploration",
  "number": "7.34",
  "title": "",
  "body": " Let and be sets, and let be a function. Suppose that and are finite sets, and that . Prove that is bijective if and only if is injective if and only if is surjective.  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-25",
  "type": "Exploration",
  "number": "7.35",
  "title": "",
  "body": " Let be a set. Suppose that is finite and non-empty. Use Theorem 6.3.11 (1) to prove that there is some such that for all .  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-26",
  "type": "Exploration",
  "number": "7.36",
  "title": "",
  "body": " Let be a set. Suppose that is countably infinite. Prove that there is a function that is injective but not surjective.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-27",
  "type": "Exploration",
  "number": "7.37",
  "title": "",
  "body": " Let be a set. Prove that is uncountable if and only if it contains an uncountable subset.  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-finite-countable-sets.html#exercise-28",
  "type": "Exploration",
  "number": "7.38",
  "title": "",
  "body": " Let and be sets. Suppose that and are countable. Prove that is countable.  "
},
{
  "id": "sec-cardinality-of-number-systems",
  "level": "1",
  "url": "sec-cardinality-of-number-systems.html",
  "type": "Section",
  "number": "7.3",
  "title": "Cardinality of the Number Systems",
  "body": "Cardinality of the Number Systems    The set is countably infinite.    We have just remarked that the set is countably infinite, and hence it is countable. Let . It follows from Exercise 6.5.8 (1) that is also countable. By Theorem 6.6.10 we know that is countable, and it follows from Theorem 6.6.8 that there is a surjective function . Let be defined by for all . Given that consists of all fractions, it is evident that is surjective. By Lemma 4.4.4 (2) we see that is a surjective function . Hence is countable by Theorem 6.6.8. Because is infinite, as previously remarked, it is therefore countably infinite.      The set is uncountable.    Suppose to the contrary that is countable. Because is infinite, as already observed, it must be countably infinite. From Example 6.5.3 (4) we know that , and hence must be countably infinite. Let be a bijective function. For each , we can write as an infinite decimal f (n) = 0.a1 n a2 n a3 n \\dots, where the numbers a1 n, a2 n, a3 n, \\dots are integers in {0, 1, \\dots, 9}, and where the expansion does not eventually become the number 9 repeating.  For each k\\in N, let bk = { 1, if a k k \\neq 1 2, if ak k = 1. Observe that bk \\neq ak k for all k\\in N. Let b be the number represented by the decimal expansion b = 0.b1 b2 b3 \\dots . Because b k \\neq 9 for all k\\in N, then this decimal expansion corresponds to a unique number in (0, 1). We claim that b \\neq f (n) for all n\\in N. The decimal expansion of any real number is unique if it does not become the number 9 repeating, and therefore if two numbers have different such decimal expansions (even if the difference is by only one digit) then the two numbers are not equal. For each n\\in N, the n-th digit in the decimal expansion of f (n) is a n n, whereas the n-th digit in the decimal expansion of b is b n. Hence b \\neq f (n) for all n\\in N. We have therefore reached a contradiction to the surjectivity of f, and we deduce that R is not countable.      The set of irrational numbers has the same cardinality as .      Let . Then .        Prove that . Use the fact that every real number can be expressed uniquely as an infinite decimal, if decimal expansions that eventually become the number repeating are not allowed.    Let and be sets. Suppose that and . Prove that .       This exercise is for the reader who is familiar with the complex numbers. Prove that the set of complex numbers has the same cardinality as .   "
},
{
  "id": "thm-q-countable",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#thm-q-countable",
  "type": "Theorem",
  "number": "7.39",
  "title": "",
  "body": "  The set is countably infinite.    We have just remarked that the set is countably infinite, and hence it is countable. Let . It follows from Exercise 6.5.8 (1) that is also countable. By Theorem 6.6.10 we know that is countable, and it follows from Theorem 6.6.8 that there is a surjective function . Let be defined by for all . Given that consists of all fractions, it is evident that is surjective. By Lemma 4.4.4 (2) we see that is a surjective function . Hence is countable by Theorem 6.6.8. Because is infinite, as previously remarked, it is therefore countably infinite.   "
},
{
  "id": "thm-r-uncountable",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#thm-r-uncountable",
  "type": "Theorem",
  "number": "7.40",
  "title": "",
  "body": "  The set is uncountable.    Suppose to the contrary that is countable. Because is infinite, as already observed, it must be countably infinite. From Example 6.5.3 (4) we know that , and hence must be countably infinite. Let be a bijective function. For each , we can write as an infinite decimal f (n) = 0.a1 n a2 n a3 n \\dots, where the numbers a1 n, a2 n, a3 n, \\dots are integers in {0, 1, \\dots, 9}, and where the expansion does not eventually become the number 9 repeating.  For each k\\in N, let bk = { 1, if a k k \\neq 1 2, if ak k = 1. Observe that bk \\neq ak k for all k\\in N. Let b be the number represented by the decimal expansion b = 0.b1 b2 b3 \\dots . Because b k \\neq 9 for all k\\in N, then this decimal expansion corresponds to a unique number in (0, 1). We claim that b \\neq f (n) for all n\\in N. The decimal expansion of any real number is unique if it does not become the number 9 repeating, and therefore if two numbers have different such decimal expansions (even if the difference is by only one digit) then the two numbers are not equal. For each n\\in N, the n-th digit in the decimal expansion of f (n) is a n n, whereas the n-th digit in the decimal expansion of b is b n. Hence b \\neq f (n) for all n\\in N. We have therefore reached a contradiction to the surjectivity of f, and we deduce that R is not countable.   "
},
{
  "id": "thm-irrationals-uncountable",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#thm-irrationals-uncountable",
  "type": "Theorem",
  "number": "7.41",
  "title": "",
  "body": "  The set of irrational numbers has the same cardinality as .   "
},
{
  "id": "thm-rn-cardinality",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#thm-rn-cardinality",
  "type": "Theorem",
  "number": "7.42",
  "title": "",
  "body": "  Let . Then .   "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#exercise-29",
  "type": "Exploration",
  "number": "7.43",
  "title": "",
  "body": "    Prove that . Use the fact that every real number can be expressed uniquely as an infinite decimal, if decimal expansions that eventually become the number repeating are not allowed.    Let and be sets. Suppose that and . Prove that .     "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-cardinality-of-number-systems.html#exercise-30",
  "type": "Exploration",
  "number": "7.44",
  "title": "",
  "body": " This exercise is for the reader who is familiar with the complex numbers. Prove that the set of complex numbers has the same cardinality as .  "
},
{
  "id": "sec-binary-operations",
  "level": "1",
  "url": "sec-binary-operations.html",
  "type": "Section",
  "number": "8.1",
  "title": "Binary Operations",
  "body": "Binary Operations  Internal Binary Operations  Binary Operation   A internal binary operation binary operation operation on a set is a       Let be a set, and let be a binary operation. If , then it would be proper to denote the result of doing the operation to the pair by writing . Such notation is quite cumbersome, however, and would not look like familiar binary operations such as addition of numbers. Hence, we will write instead of .    Internal binary operations are usually reffered to as binary operations as they are the most common form of binary operation. The internal piece subtly implies the existence of some nebulous external binary operation, which we'll get to later.      A binary operation is closed        Addition  The function defined by is a binary operation for .   Multiplication  The function defined by (often shortened to ) is a binary operation for .   Composition  Let denote the set of all functions from a set to itself. The function defined by is a binary operation.        A binary operation on a set is commutative if for all .      A binary operation on a set is associative if for all .      A binary operation on a set is idempotent if for all .      Let be a binary operation on a set .   An element is called a left identity if for all .    An element is called a right identity if for all .    An element is called an identity if it is both a left and a right identity.         Any binary operation has at most one identity.      If an operation has both a left identity and a right identity, then these two elements are equal.      Let be a binary operation on a set with identity , and let .   An element is called a left inverse of if .    An element is called a right inverse if .    An element that is both a left inverse and right inverse of is called an inverse of .         Let be an associative binary operation on a set .   Any element in has at most one inverse.    If has a left inverse and a right inverse , then these .        Partial Binary Operations    A partial function from a set to a set is a function from a subset of to . This is denoted .      A partial binary operation partial binary operation operation on a set is a partial function     Division      External Binary Operations         "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "sec-binary-operations.html#def-binop",
  "type": "Definition",
  "number": "8.1",
  "title": "Binary Operation.",
  "body": "Binary Operation   A internal binary operation binary operation operation on a set is a     "
},
{
  "id": "convention-22",
  "level": "2",
  "url": "sec-binary-operations.html#convention-22",
  "type": "Convention",
  "number": "8.2",
  "title": "",
  "body": " Let be a set, and let be a binary operation. If , then it would be proper to denote the result of doing the operation to the pair by writing . Such notation is quite cumbersome, however, and would not look like familiar binary operations such as addition of numbers. Hence, we will write instead of .  "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-binary-operations.html#remark-22",
  "type": "Remark",
  "number": "8.3",
  "title": "",
  "body": " Internal binary operations are usually reffered to as binary operations as they are the most common form of binary operation. The internal piece subtly implies the existence of some nebulous external binary operation, which we'll get to later.   "
},
{
  "id": "def-closure",
  "level": "2",
  "url": "sec-binary-operations.html#def-closure",
  "type": "Definition",
  "number": "8.4",
  "title": "",
  "body": "  A binary operation is closed    "
},
{
  "id": "example-38",
  "level": "2",
  "url": "sec-binary-operations.html#example-38",
  "type": "Example",
  "number": "8.5",
  "title": "",
  "body": "   Addition  The function defined by is a binary operation for .   Multiplication  The function defined by (often shortened to ) is a binary operation for .   Composition  Let denote the set of all functions from a set to itself. The function defined by is a binary operation.     "
},
{
  "id": "def-commutative",
  "level": "2",
  "url": "sec-binary-operations.html#def-commutative",
  "type": "Definition",
  "number": "8.6",
  "title": "",
  "body": "  A binary operation on a set is commutative if for all .   "
},
{
  "id": "def-associative",
  "level": "2",
  "url": "sec-binary-operations.html#def-associative",
  "type": "Definition",
  "number": "8.7",
  "title": "",
  "body": "  A binary operation on a set is associative if for all .   "
},
{
  "id": "def-idempotent",
  "level": "2",
  "url": "sec-binary-operations.html#def-idempotent",
  "type": "Definition",
  "number": "8.8",
  "title": "",
  "body": "  A binary operation on a set is idempotent if for all .   "
},
{
  "id": "def-identity",
  "level": "2",
  "url": "sec-binary-operations.html#def-identity",
  "type": "Definition",
  "number": "8.9",
  "title": "",
  "body": "  Let be a binary operation on a set .   An element is called a left identity if for all .    An element is called a right identity if for all .    An element is called an identity if it is both a left and a right identity.      "
},
{
  "id": "thm-unique-identity",
  "level": "2",
  "url": "sec-binary-operations.html#thm-unique-identity",
  "type": "Theorem",
  "number": "8.10",
  "title": "",
  "body": "  Any binary operation has at most one identity.   "
},
{
  "id": "cor-left-right-identity",
  "level": "2",
  "url": "sec-binary-operations.html#cor-left-right-identity",
  "type": "Corollary",
  "number": "8.11",
  "title": "",
  "body": "  If an operation has both a left identity and a right identity, then these two elements are equal.   "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "sec-binary-operations.html#def-inverse",
  "type": "Definition",
  "number": "8.12",
  "title": "",
  "body": "  Let be a binary operation on a set with identity , and let .   An element is called a left inverse of if .    An element is called a right inverse if .    An element that is both a left inverse and right inverse of is called an inverse of .      "
},
{
  "id": "prop-unique-associative-inverses",
  "level": "2",
  "url": "sec-binary-operations.html#prop-unique-associative-inverses",
  "type": "Proposition",
  "number": "8.13",
  "title": "",
  "body": "  Let be an associative binary operation on a set .   Any element in has at most one inverse.    If has a left inverse and a right inverse , then these .      "
},
{
  "id": "def-partial-function",
  "level": "2",
  "url": "sec-binary-operations.html#def-partial-function",
  "type": "Definition",
  "number": "8.14",
  "title": "",
  "body": "  A partial function from a set to a set is a function from a subset of to . This is denoted .   "
},
{
  "id": "def-partial-binary-operation",
  "level": "2",
  "url": "sec-binary-operations.html#def-partial-binary-operation",
  "type": "Definition",
  "number": "8.15",
  "title": "",
  "body": "  A partial binary operation partial binary operation operation on a set is a partial function    "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-binary-operations.html#example-39",
  "type": "Example",
  "number": "8.16",
  "title": "Division.",
  "body": "Division    "
},
{
  "id": "def-external-binary-operation",
  "level": "2",
  "url": "sec-binary-operations.html#def-external-binary-operation",
  "type": "Definition",
  "number": "8.17",
  "title": "",
  "body": "     "
},
{
  "id": "sec-algebraic-structures",
  "level": "1",
  "url": "sec-algebraic-structures.html",
  "type": "Section",
  "number": "8.2",
  "title": "Algebraic Structures",
  "body": "Algebraic Structures  Grouplike Structures    Let be a binary operation on a set . We define the following:   The pair is called a magma .    A semigroup is an associative magma.    A monoid is a semigroup with an identity element.    A group is a monoid with inverses.    An abelian group is a commutative group.         Let be a partial binary operation on a set . We define the following:   The pair is called a partial magma .    A semigroupoid is an associative partial magma.    A small category is a semigroupoid with an identity element.    A groupoid is a small category with inverses.        Ringlike Structures         Latticelike Structures         "
},
{
  "id": "def-magma",
  "level": "2",
  "url": "sec-algebraic-structures.html#def-magma",
  "type": "Definition",
  "number": "8.18",
  "title": "",
  "body": "  Let be a binary operation on a set . We define the following:   The pair is called a magma .    A semigroup is an associative magma.    A monoid is a semigroup with an identity element.    A group is a monoid with inverses.    An abelian group is a commutative group.      "
},
{
  "id": "def-partial-structures",
  "level": "2",
  "url": "sec-algebraic-structures.html#def-partial-structures",
  "type": "Definition",
  "number": "8.19",
  "title": "",
  "body": "  Let be a partial binary operation on a set . We define the following:   The pair is called a partial magma .    A semigroupoid is an associative partial magma.    A small category is a semigroupoid with an identity element.    A groupoid is a small category with inverses.      "
},
{
  "id": "def-distributive-law",
  "level": "2",
  "url": "sec-algebraic-structures.html#def-distributive-law",
  "type": "Definition",
  "number": "8.20",
  "title": "",
  "body": "     "
},
{
  "id": "def-absorbtion-law",
  "level": "2",
  "url": "sec-algebraic-structures.html#def-absorbtion-law",
  "type": "Definition",
  "number": "8.21",
  "title": "",
  "body": "     "
},
{
  "id": "sec-posets",
  "level": "1",
  "url": "sec-posets.html",
  "type": "Section",
  "number": "8.3",
  "title": "Partially Ordered Sets",
  "body": "Partially Ordered Sets  Antisymmetric   Let be a non-empty set, and let be a relation on . The relation is antisymmetric if and imply that , for all     Poset   Let be a non-empty set, and let be a relation on . The relation is a partial ordering (also called a partial order ) if it is reflexive, transitive and antisymmetric. If is a partial ordering, the pair is a partially ordered set, often abbreviated as poset .        Let be a set. Then is a poset but not a totally ordered set, as mentioned previously.    Divisibility in is a poset.      Toset   Let be a non-empty set, and let be a relation on . The relation is a total ordering (also called a total order or linear ordering) if it is a partial ordering, and if for every , at least one of a or holds. If is a total ordering, the pair is a totally ordered set .     Formally, a poset is a pair . However, when the relation is understood from the context, or it is not important to designate the symbol for the relation, we will simply say “let be a poset.” Similarly for totally ordered sets.    Each of the sets and with the relation is a totally ordered set.   Cover   Let be a poset, and let . The element  covers the element if , and , and there is no such that and .    Greatest, Least Element   Let be a poset, and let . The element is a greatest element of if for all . The element is a least element of if for all .     The poset has no greatest element or least element. Even finite posets need not have greatest elements or least elements. For example, the poset in Example 7.4.4 (1) does not have a greatest element; observe that is not a greatest element with respect to the relation , because does not divide . The poset does have a least element, the number , because divides all the other numbers in the set.   Maximal, Minimal Element   Let be a poset, and let . The element a is a maximal element of if there is no such that and . The element is a minimal element of if there is no such that and .     The poset has no maximal element or minimal element. Let be the poset in Example 7.4.4 (1). The elements , and are all maximal elements, which shows that maximal elements need not be unique, and also that maximal elements need not be greatest elements. The element is a minimal element, which also happens to be a least element.     Let be a poset. Suppose that is finite. Then has a maximal element and a minimal element.    We will prove the existence of maximal elements; the existence of minimal elements is similar, and we omit the details. Let . We proceed by induction on . If , then the single element of is clearly a maximal element. Now assume that . Suppose that the result is true for . Let , and let . By Exercise 7.4.8 we know that is a poset. Because | , it follows from the inductive hypothesis that there is a maximal element of . We now define as follows. If , let ; if it is not the case that , then let . We claim that is a maximal element of . There are two cases. First, suppose that . Then . Suppose that there is some such that and . By transitivity it follows that , and by antisymmetry it follows that . Because , then , and we then have a contradiction to the fact that is a maximal element of . It follows that is a maximal element of . Second, suppose that it is not the case that . Then . Because is a maximal element of , then there is no such that and . It follows that there is no such that and , and hence is a maximal element of .    Poset Bounds   Let be a poset, let be a subset and let . The element is an upper bound of if for all . The element is a least upper bound of if it is an upper bound of , and for any other upper bound . The element is a lower bound of if for all . The element is a greatest lower bound for if it is a lower bound of , and for any other lower bound .    Uniqueness of Poset Bounds   Let be a poset, and let be a subset. If has a least upper bound, then it is unique, and if has a greatest lower bound, then it is unique.    Let , and suppose that both are least upper bounds of . By definition both and are upper bounds for . Because is a least upper bound of , and is an upper bound of , then by the definition of least upper bounds. Similarly, we see that . By antisymmetry, it follows that . A similar argument works for greatest lower bounds; we omit the details.    Poset Extension Theorem   Let be a poset. Suppose that is finite. Then there is a total ordering on A such that if then , for all .    Let . We proceed by induction on . If the result is trivial. Now assume that . Suppose that the result is true for . By Theorem 7.4.9 the poset has a maximal element, say . Let . By Exercise 7.4.8 we know that is a poset. Because , it follows from the inductive hypothesis that there is a total ordering on such that if then , for all . Now define a relation on as follows. If , let if and only if . If , let . It is left to the reader in Exercise 7.4.9 to show that is a total order on , and that if then , for all .    Order Homomorphism   Let and be posets, and let be a function. The function is an order homomorphism (also called an order preserving function ) if implies , for all . The function is an order isomorphism if it is bijective, and if both and are order homomorphisms.    Finite Toset Classification Theorem   Let be a totally ordered set. Suppose that is finite. Let . Then there is an order isomorphism from to .    We follow [KR83a]. We prove the result by induction on . When the result is trivial. Now assume that . Suppose that the result holds for . By Theorem 7.4.9 the poset has a maximal element, say . Let . Because is a total ordering, we know that or . If it were the case that , then by hypothesis on we would know that . Hence . Let . By Exercise 7.4.8 we know that is a poset. Because , it follows from the inductive hypothesis that there is an order isomorphism from to , say . Let be defined by for all , and . Because is bijective, it is straightforward to see that is bijective as well; we omit the details. To see that is an order isomorphism, it suffices by Lemma 7.4.16 to show that if and only if , for all . First, let . Then if and only if because is an order isomorphism. Because and , then if and only if . Now let . We know that , and we also know that , because . Hence if and only if , because both these statements are true. It follows that is an order isomorphism.    "
},
{
  "id": "def-antisymmetric",
  "level": "2",
  "url": "sec-posets.html#def-antisymmetric",
  "type": "Definition",
  "number": "8.22",
  "title": "Antisymmetric.",
  "body": "Antisymmetric   Let be a non-empty set, and let be a relation on . The relation is antisymmetric if and imply that , for all    "
},
{
  "id": "def-poset",
  "level": "2",
  "url": "sec-posets.html#def-poset",
  "type": "Definition",
  "number": "8.23",
  "title": "Poset.",
  "body": "Poset   Let be a non-empty set, and let be a relation on . The relation is a partial ordering (also called a partial order ) if it is reflexive, transitive and antisymmetric. If is a partial ordering, the pair is a partially ordered set, often abbreviated as poset .   "
},
{
  "id": "example-40",
  "level": "2",
  "url": "sec-posets.html#example-40",
  "type": "Example",
  "number": "8.24",
  "title": "",
  "body": "    Let be a set. Then is a poset but not a totally ordered set, as mentioned previously.    Divisibility in is a poset.     "
},
{
  "id": "def-toset",
  "level": "2",
  "url": "sec-posets.html#def-toset",
  "type": "Definition",
  "number": "8.25",
  "title": "Toset.",
  "body": "Toset   Let be a non-empty set, and let be a relation on . The relation is a total ordering (also called a total order or linear ordering) if it is a partial ordering, and if for every , at least one of a or holds. If is a total ordering, the pair is a totally ordered set .   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-posets.html#remark-23",
  "type": "Remark",
  "number": "8.26",
  "title": "",
  "body": " Formally, a poset is a pair . However, when the relation is understood from the context, or it is not important to designate the symbol for the relation, we will simply say “let be a poset.” Similarly for totally ordered sets.  "
},
{
  "id": "example-41",
  "level": "2",
  "url": "sec-posets.html#example-41",
  "type": "Example",
  "number": "8.27",
  "title": "",
  "body": " Each of the sets and with the relation is a totally ordered set.  "
},
{
  "id": "def-covers",
  "level": "2",
  "url": "sec-posets.html#def-covers",
  "type": "Definition",
  "number": "8.28",
  "title": "Cover.",
  "body": "Cover   Let be a poset, and let . The element  covers the element if , and , and there is no such that and .   "
},
{
  "id": "def-greatest-least-element",
  "level": "2",
  "url": "sec-posets.html#def-greatest-least-element",
  "type": "Definition",
  "number": "8.29",
  "title": "Greatest, Least Element.",
  "body": "Greatest, Least Element   Let be a poset, and let . The element is a greatest element of if for all . The element is a least element of if for all .   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-posets.html#example-42",
  "type": "Example",
  "number": "8.30",
  "title": "",
  "body": " The poset has no greatest element or least element. Even finite posets need not have greatest elements or least elements. For example, the poset in Example 7.4.4 (1) does not have a greatest element; observe that is not a greatest element with respect to the relation , because does not divide . The poset does have a least element, the number , because divides all the other numbers in the set.  "
},
{
  "id": "def-maximal-minimal-element",
  "level": "2",
  "url": "sec-posets.html#def-maximal-minimal-element",
  "type": "Definition",
  "number": "8.31",
  "title": "Maximal, Minimal Element.",
  "body": "Maximal, Minimal Element   Let be a poset, and let . The element a is a maximal element of if there is no such that and . The element is a minimal element of if there is no such that and .   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-posets.html#example-43",
  "type": "Example",
  "number": "8.32",
  "title": "",
  "body": " The poset has no maximal element or minimal element. Let be the poset in Example 7.4.4 (1). The elements , and are all maximal elements, which shows that maximal elements need not be unique, and also that maximal elements need not be greatest elements. The element is a minimal element, which also happens to be a least element.  "
},
{
  "id": "thm-finite-maximal-minimal",
  "level": "2",
  "url": "sec-posets.html#thm-finite-maximal-minimal",
  "type": "Theorem",
  "number": "8.33",
  "title": "",
  "body": "  Let be a poset. Suppose that is finite. Then has a maximal element and a minimal element.    We will prove the existence of maximal elements; the existence of minimal elements is similar, and we omit the details. Let . We proceed by induction on . If , then the single element of is clearly a maximal element. Now assume that . Suppose that the result is true for . Let , and let . By Exercise 7.4.8 we know that is a poset. Because | , it follows from the inductive hypothesis that there is a maximal element of . We now define as follows. If , let ; if it is not the case that , then let . We claim that is a maximal element of . There are two cases. First, suppose that . Then . Suppose that there is some such that and . By transitivity it follows that , and by antisymmetry it follows that . Because , then , and we then have a contradiction to the fact that is a maximal element of . It follows that is a maximal element of . Second, suppose that it is not the case that . Then . Because is a maximal element of , then there is no such that and . It follows that there is no such that and , and hence is a maximal element of .   "
},
{
  "id": "def-poset-bounds",
  "level": "2",
  "url": "sec-posets.html#def-poset-bounds",
  "type": "Definition",
  "number": "8.34",
  "title": "Poset Bounds.",
  "body": "Poset Bounds   Let be a poset, let be a subset and let . The element is an upper bound of if for all . The element is a least upper bound of if it is an upper bound of , and for any other upper bound . The element is a lower bound of if for all . The element is a greatest lower bound for if it is a lower bound of , and for any other lower bound .   "
},
{
  "id": "lem-unique-bounds",
  "level": "2",
  "url": "sec-posets.html#lem-unique-bounds",
  "type": "Lemma",
  "number": "8.35",
  "title": "Uniqueness of Poset Bounds.",
  "body": "Uniqueness of Poset Bounds   Let be a poset, and let be a subset. If has a least upper bound, then it is unique, and if has a greatest lower bound, then it is unique.    Let , and suppose that both are least upper bounds of . By definition both and are upper bounds for . Because is a least upper bound of , and is an upper bound of , then by the definition of least upper bounds. Similarly, we see that . By antisymmetry, it follows that . A similar argument works for greatest lower bounds; we omit the details.   "
},
{
  "id": "thm-poset-to-toset",
  "level": "2",
  "url": "sec-posets.html#thm-poset-to-toset",
  "type": "Theorem",
  "number": "8.36",
  "title": "Poset Extension Theorem.",
  "body": "Poset Extension Theorem   Let be a poset. Suppose that is finite. Then there is a total ordering on A such that if then , for all .    Let . We proceed by induction on . If the result is trivial. Now assume that . Suppose that the result is true for . By Theorem 7.4.9 the poset has a maximal element, say . Let . By Exercise 7.4.8 we know that is a poset. Because , it follows from the inductive hypothesis that there is a total ordering on such that if then , for all . Now define a relation on as follows. If , let if and only if . If , let . It is left to the reader in Exercise 7.4.9 to show that is a total order on , and that if then , for all .   "
},
{
  "id": "def-order-homomorphism",
  "level": "2",
  "url": "sec-posets.html#def-order-homomorphism",
  "type": "Definition",
  "number": "8.37",
  "title": "Order Homomorphism.",
  "body": "Order Homomorphism   Let and be posets, and let be a function. The function is an order homomorphism (also called an order preserving function ) if implies , for all . The function is an order isomorphism if it is bijective, and if both and are order homomorphisms.   "
},
{
  "id": "thm-finite-toset-classification",
  "level": "2",
  "url": "sec-posets.html#thm-finite-toset-classification",
  "type": "Theorem",
  "number": "8.38",
  "title": "Finite Toset Classification Theorem.",
  "body": "Finite Toset Classification Theorem   Let be a totally ordered set. Suppose that is finite. Let . Then there is an order isomorphism from to .    We follow [KR83a]. We prove the result by induction on . When the result is trivial. Now assume that . Suppose that the result holds for . By Theorem 7.4.9 the poset has a maximal element, say . Let . Because is a total ordering, we know that or . If it were the case that , then by hypothesis on we would know that . Hence . Let . By Exercise 7.4.8 we know that is a poset. Because , it follows from the inductive hypothesis that there is an order isomorphism from to , say . Let be defined by for all , and . Because is bijective, it is straightforward to see that is bijective as well; we omit the details. To see that is an order isomorphism, it suffices by Lemma 7.4.16 to show that if and only if , for all . First, let . Then if and only if because is an order isomorphism. Because and , then if and only if . Now let . We know that , and we also know that , because . Hence if and only if , because both these statements are true. It follows that is an order isomorphism.   "
},
{
  "id": "sec-lattices",
  "level": "1",
  "url": "sec-lattices.html",
  "type": "Section",
  "number": "8.4",
  "title": "Lattices",
  "body": "Lattices  Meet, Join   Let be a poset. Let . The join of and , denoted , is the least upper bound of , if the least upper bound exists; the join is not defined if the least upper bound does not exist. The meet of and , denoted , is the greatest lower bound of , if the greatest lower bound exists; the meet is not defined if the greatest lower bound does not exist.    Lattice   A poset is a lattice if and exist for all .        The sets and with the relation are all lattices. We know from Example 7.4.2 (3) that these sets with the relation are all posets. Let and be two numbers in any one of these sets. If then and ; if , then is the smaller of the two numbers, and is the larger. More generally, any totally ordered set is a lattice, by the same argument.    Let be a set. The poset is a lattice. If , then and .    As shown in Example 7.4.2 (5), the set with the relation “ ” is a poset. This poset is a lattice. If , then is the greatest common divisor of and , and is the least common multiple.        Let be a lattice, and let .    and (Idempotent Laws).     and (Commutative Laws).     and (Associative Laws).     and (Absorption Laws).     if and only if if and only if .    If , then and .       Coming soon!      Let be a set, and let and be binary operations on . Suppose that and satisfy the following properties. Let .    and .     and .     and .   Let be the relation on defined by if and only , for all . Then is a lattice, with and the meet and join of the lattice, respectively.    We follow [Bir48] and [LP98] in part. As a preliminary, we prove the following two facts: (1) for all ; and (2) if and only if , for all . Let . Using both parts of Property (c), we see that , which proves Fact (1). Suppose that . Then by Properties (a) and (c) we see that , which proves one of the implications in Fact (2); a similar argument proves the other implication, and we omit the details.  We now show that is a poset. Because by Fact (1), it follows from the definition of that . Hence is reflexive. Now suppose that and . Then and . By Property (b) we see that . It follows that . Therefore is transitive. Next, suppose that and . Then and . It follows from Property (a) that . Therefore is antisymmetric. We conclude that is a poset.  Finally, we show that and are the meet and join of , respectively. It will then follow from this fact that meet and join always exist for any two elements of , and hence is a lattice. We start with . Using Property (b) and Fact (1) we see that . Hence . Because by Property (a), a similar argument shows that . Therefore is a lower bound of . Now suppose that is a lower bound of . Then and , and therefore and . By Property (b) we see that . Hence . It follows that is the greatest lower bound of , which means that is the meet of and .  We now turn to . By Property (c) we know that . Hence . Because by Property (a), a similar argument shows that . Hence is an upper bound of . Now suppose that is an upper bound of . Then and , and therefore and . By Fact (2) we deduce that and . Property (b) then implies that . Hence by Fact (2). Therefore . It follows that is the least upper bound of , which means that is the join of .      Let and be lattices, and let be a function. Let and be the meet and join for , and let and be the meet and join for . The function is a meet homomorphism if for all . The function is a join homomorphism if for all .        The function in Example 7.4.17 (2) is both a meet homomorphism and a join homomorphism, as the reader can verify.    The function in Example 7.4.17 (1) is an order homomorphism, as was stated in that example. However, this function is neither a meet homomorphism nor a join homomorphism. For example, let , and let . Then, as in Example 7.5.2 (2), we see that , and . Hence and . However, as discussed in Example 7.5.2 (1), we see that , and . Hence and .        Let and be lattices, and let be a function.   If is a meet homomorphism or a join homomorphism, then it is an order homomorphism.    If is bijective and a meet (respectively, join) homomorphism, then is a meet (respectively, join) homomorphism.    The function is an order isomorphism if and only if is bijective and a meet homomorphism if and only if is bijective and a join homomorphism.          Suppose that is a meet homomorphism. Let denote the meet for and , respectively. Let . Suppose that . Then by Theorem 7.5.3 (6) we know that . Then , because is a meet homomorphism. Using Theorem 7.5.3 (6) again, we deduce that . It follows that is an order homomorphism. A similar argument works if is a join homomorphism; we omit the details.         Let be a lattice, and let be an order homomorphism. Suppose that the least upper bound and greatest lower bound exist for all non-empty subsets of . Then there is some such that .    Let . Observe that is non-empty because it is a poset, and all posets are assumed to be non-empty. Let be the greatest lower bound of , which exists by hypothesis. Then is a lower bound of , and therefore for all . In particular, we see that . It follows that , and so is non-empty.  Let be the least upper bound of . Let . Then is an upper bound of , and therefore . Using the definition of and the fact that is an order homomorphism, we deduce that . It follows that is an upper bound for . Because is the least upper bound of , we deduce that . Because is an order homomorphism, it follows that . Hence , and therefore , because is an upper bound of . By antisymmetry, we deduce that .      Let be a lattice, and let be an order homomorphism. If is finite, then there is some such that .    "
},
{
  "id": "def-meet-join",
  "level": "2",
  "url": "sec-lattices.html#def-meet-join",
  "type": "Definition",
  "number": "8.39",
  "title": "Meet, Join.",
  "body": "Meet, Join   Let be a poset. Let . The join of and , denoted , is the least upper bound of , if the least upper bound exists; the join is not defined if the least upper bound does not exist. The meet of and , denoted , is the greatest lower bound of , if the greatest lower bound exists; the meet is not defined if the greatest lower bound does not exist.   "
},
{
  "id": "def-lattice",
  "level": "2",
  "url": "sec-lattices.html#def-lattice",
  "type": "Definition",
  "number": "8.40",
  "title": "Lattice.",
  "body": "Lattice   A poset is a lattice if and exist for all .   "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-lattices.html#example-44",
  "type": "Example",
  "number": "8.41",
  "title": "",
  "body": "    The sets and with the relation are all lattices. We know from Example 7.4.2 (3) that these sets with the relation are all posets. Let and be two numbers in any one of these sets. If then and ; if , then is the smaller of the two numbers, and is the larger. More generally, any totally ordered set is a lattice, by the same argument.    Let be a set. The poset is a lattice. If , then and .    As shown in Example 7.4.2 (5), the set with the relation “ ” is a poset. This poset is a lattice. If , then is the greatest common divisor of and , and is the least common multiple.     "
},
{
  "id": "theorem-48",
  "level": "2",
  "url": "sec-lattices.html#theorem-48",
  "type": "Theorem",
  "number": "8.42",
  "title": "",
  "body": "  Let be a lattice, and let .    and (Idempotent Laws).     and (Commutative Laws).     and (Associative Laws).     and (Absorption Laws).     if and only if if and only if .    If , then and .       Coming soon!   "
},
{
  "id": "theorem-49",
  "level": "2",
  "url": "sec-lattices.html#theorem-49",
  "type": "Theorem",
  "number": "8.43",
  "title": "",
  "body": "  Let be a set, and let and be binary operations on . Suppose that and satisfy the following properties. Let .    and .     and .     and .   Let be the relation on defined by if and only , for all . Then is a lattice, with and the meet and join of the lattice, respectively.    We follow [Bir48] and [LP98] in part. As a preliminary, we prove the following two facts: (1) for all ; and (2) if and only if , for all . Let . Using both parts of Property (c), we see that , which proves Fact (1). Suppose that . Then by Properties (a) and (c) we see that , which proves one of the implications in Fact (2); a similar argument proves the other implication, and we omit the details.  We now show that is a poset. Because by Fact (1), it follows from the definition of that . Hence is reflexive. Now suppose that and . Then and . By Property (b) we see that . It follows that . Therefore is transitive. Next, suppose that and . Then and . It follows from Property (a) that . Therefore is antisymmetric. We conclude that is a poset.  Finally, we show that and are the meet and join of , respectively. It will then follow from this fact that meet and join always exist for any two elements of , and hence is a lattice. We start with . Using Property (b) and Fact (1) we see that . Hence . Because by Property (a), a similar argument shows that . Therefore is a lower bound of . Now suppose that is a lower bound of . Then and , and therefore and . By Property (b) we see that . Hence . It follows that is the greatest lower bound of , which means that is the meet of and .  We now turn to . By Property (c) we know that . Hence . Because by Property (a), a similar argument shows that . Hence is an upper bound of . Now suppose that is an upper bound of . Then and , and therefore and . By Fact (2) we deduce that and . Property (b) then implies that . Hence by Fact (2). Therefore . It follows that is the least upper bound of , which means that is the join of .   "
},
{
  "id": "def-meet-join-homomorphism",
  "level": "2",
  "url": "sec-lattices.html#def-meet-join-homomorphism",
  "type": "Definition",
  "number": "8.44",
  "title": "",
  "body": "  Let and be lattices, and let be a function. Let and be the meet and join for , and let and be the meet and join for . The function is a meet homomorphism if for all . The function is a join homomorphism if for all .   "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-lattices.html#example-45",
  "type": "Example",
  "number": "8.45",
  "title": "",
  "body": "    The function in Example 7.4.17 (2) is both a meet homomorphism and a join homomorphism, as the reader can verify.    The function in Example 7.4.17 (1) is an order homomorphism, as was stated in that example. However, this function is neither a meet homomorphism nor a join homomorphism. For example, let , and let . Then, as in Example 7.5.2 (2), we see that , and . Hence and . However, as discussed in Example 7.5.2 (1), we see that , and . Hence and .     "
},
{
  "id": "theorem-50",
  "level": "2",
  "url": "sec-lattices.html#theorem-50",
  "type": "Theorem",
  "number": "8.46",
  "title": "",
  "body": "  Let and be lattices, and let be a function.   If is a meet homomorphism or a join homomorphism, then it is an order homomorphism.    If is bijective and a meet (respectively, join) homomorphism, then is a meet (respectively, join) homomorphism.    The function is an order isomorphism if and only if is bijective and a meet homomorphism if and only if is bijective and a join homomorphism.          Suppose that is a meet homomorphism. Let denote the meet for and , respectively. Let . Suppose that . Then by Theorem 7.5.3 (6) we know that . Then , because is a meet homomorphism. Using Theorem 7.5.3 (6) again, we deduce that . It follows that is an order homomorphism. A similar argument works if is a join homomorphism; we omit the details.      "
},
{
  "id": "theorem-51",
  "level": "2",
  "url": "sec-lattices.html#theorem-51",
  "type": "Theorem",
  "number": "8.47",
  "title": "",
  "body": "  Let be a lattice, and let be an order homomorphism. Suppose that the least upper bound and greatest lower bound exist for all non-empty subsets of . Then there is some such that .    Let . Observe that is non-empty because it is a poset, and all posets are assumed to be non-empty. Let be the greatest lower bound of , which exists by hypothesis. Then is a lower bound of , and therefore for all . In particular, we see that . It follows that , and so is non-empty.  Let be the least upper bound of . Let . Then is an upper bound of , and therefore . Using the definition of and the fact that is an order homomorphism, we deduce that . It follows that is an upper bound for . Because is the least upper bound of , we deduce that . Because is an order homomorphism, it follows that . Hence , and therefore , because is an upper bound of . By antisymmetry, we deduce that .   "
},
{
  "id": "corollary-10",
  "level": "2",
  "url": "sec-lattices.html#corollary-10",
  "type": "Corollary",
  "number": "8.48",
  "title": "",
  "body": "  Let be a lattice, and let be an order homomorphism. If is finite, then there is some such that .   "
},
{
  "id": "sec-axioms",
  "level": "1",
  "url": "sec-axioms.html",
  "type": "Section",
  "number": "8.5",
  "title": "Axioms for Set Theory",
  "body": "Axioms for Set Theory        "
},
{
  "id": "axiom-",
  "level": "2",
  "url": "sec-axioms.html#axiom-",
  "type": "Axiom",
  "number": "8.49",
  "title": "",
  "body": "     "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
