"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, InputGroup} from "@heroui/react";
import Link from "next/link";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import {useState} from "react";

const SignupPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: "/" // Optional: redirect after successful sign-up
        })
        console.log("sign up response:", { data, error });
        if (error) {
            alert("Error signing up:" + error.message);
        }
        if (data) {
            alert("Sign up successful! Please check your email to verify your account.");
            window.location.href = "/"; // full reload
        }
    };

    return (
        <div className='space-y-4 mx-auto flex flex-col justify-center items-center'>
            <h2 className="font-bold text-2xl">Sign Up</h2>
            <div><span className="text-sm text-muted-foreground">
                Already have an account?</span> <Link href="/auth/signin">Sign In</Link>
            </div>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (!value || value.trim().length < 2) {
                            return "Name must be at least 2 characters long";
                        }

                        if (!/^[a-zA-Z\s'-]+$/.test(value)) {
                            return "Name can only contain letters, spaces, hyphens, and apostrophes";
                        }

                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField className="" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            className=""
                            type={isVisible ? "text" : "password"}
                            name= "password"
                            placeholder="Enter your password"
                        />
                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignupPage;